import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import NavBar from "../LandingPage/NavBar/NavBar";
import NavBarMagic from "../LandingPage/NavBarMagic/NavBarMagic";
import JurusanHeader from "./JurusanHeader";
import JurusanCardList from "./JurusanCardList";
import JurusanFooter from "../LandingPage/Footer/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getKelasByJurusan, getJurusanById } from "../../../data/staticData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import bg404 from "../../assets/bg404.png";
import img404 from "../../assets/404.png";

export default function RPL() {
  const navigate = useNavigate();
  const { jurusanId } = useParams();

  const [kelas, setKelas] = useState([]);
  const [jurusan, setJurusan] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    setKelas(getKelasByJurusan(jurusanId));
    setJurusan(getJurusanById(jurusanId));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [jurusanId]);

  return (
    <div>
      <div className="bg-bts">
        <NavBarMagic />
        <NavBar />
        <br />
        <br />
        {loading ? (
          <div className="container">
            {/* header */}
            <div className="backdrop-blur-sm bg-white/30 shadow rounded-md p-3 h-[450px] laptop:p-4 laptop:h-auto w-full mx-auto">
              <div className="animate-pulse laptop:flex laptop:space-x-4 mini:py-8 mobile:py-8 laptop:py-6 laptop:px-4">
                <div className="rounded-full bg-slate-700 mini:w-36 mini:h-36 mobile:w-36 mobile:h-36  mx-auto laptop:pt-0 laptop:w-40 laptop:h-40"></div>

                <div className="laptop:flex-1 laptop:space-y-6 py-1">
                  <div className="space-y-3 mobile:pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                    <div className="w-[90%] mini:mx-auto mobile:mx-auto laptop:w-128 laptop:mx-0 h-8 bg-slate-700 mini:mt-8 mobile:mt-8 laptop:mt-1 rounded-full"></div>
                    <br />
                    <div className="mobile:w-full laptop:w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                    <div className="mobile:w-full laptop:w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            {/* card jurusan */}
            <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-4">
              <div className="rounded bg-white/30 p-3">
                <div className="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div className="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>

              <div className="rounded bg-white/30 p-3">
                <div className="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div className="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>

              <div className="rounded bg-white/30 p-3">
                <div className="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div className="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : jurusan.length !== 0 || kelas.length !== 0 ? (
          <>
            <Container>
              <div className="mb-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "#ffffff",
                    backdropFilter: "blur(5px)",
                    fontWeight: "500",
                    transition: "all 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "translateX(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Kembali</span>
                </button>
              </div>
              <JurusanHeader jurusan={jurusan} />
              <br />
              <br />
              <JurusanCardList kelas={kelas} />
              <br />
              <br />
            </Container>
            <JurusanFooter />
          </>
        ) : (
          <div className="text-center text-white my-5">
            <h4>Gagal Mengambil Data Jurusan</h4>
            <button
              onClick={handleBack}
              className="btn btn-outline-light mt-3 d-inline-flex align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Kembali</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
