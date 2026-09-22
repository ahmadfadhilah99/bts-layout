import React, { useState, useEffect, useRef } from "react";
import NavBar from "../LandingPage/NavBar/NavBar";
import NavBarMagic from "../LandingPage/NavBarMagic/NavBarMagic";
import "../RPL.css";
import { getGambarByKelas, getSiswaByKelas, getKelasById } from "../../../data/staticData";
import KelasFotoSlide from "./KelasFotoSlide";
import KelasFotoFooter from "../LandingPage/Footer/Footer";
import KelasCardListing from "./KelasCardListing";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RPL1() {
  const navigate = useNavigate();
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const routeParams = useParams();
  const { kelasId } = routeParams;
  const currentKelas = getKelasById(kelasId);

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else if (currentKelas && currentKelas.jurusan_id) {
      navigate(`/jurusan/${currentKelas.jurusan_id}`);
    } else {
      navigate("/");
    }
  };
  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
  };

  useEffect(() => {
    setGambar(getGambarByKelas(kelasId));
    setSiswa(getSiswaByKelas(kelasId).sort(sort));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [kelasId]);

  return (
    <div>
      <div className="bg-bts min-h-screen">
        <NavBarMagic />
        <NavBar />
        {loading ? (
          <>
            <div className="container">
              {/* search */}
              <div className="w-[95%] h-fit backdrop-blur-sm bg-white/30 p-3 mt-4 mb-8 mx-auto rounded-lg">
                <div className="w-32 h-5 animate-pulse bg-slate-700 rounded-full"></div>
              </div>
              {/* card */}
              <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : siswa.length !== 0 ? (
          <>
            {<KelasFotoSlide props={{ gambar, loading }} />}
            <br />
            <br />
            <Container>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline-light d-flex align-items-center gap-2 px-3 py-2 rounded-3 shadow-sm"
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
                {currentKelas && (
                  <h3 className="text-white font-semibold m-0 text-xl md:text-2xl">
                    {currentKelas.kelas_nama}
                  </h3>
                )}
              </div>
              <FloatingLabel
                style={{ color: "black" }}
                controlId="floatingInput"
                className="mb-3"
              >
                <InputGroup className="mb-3">
                  <Form.Control
                    className="font-body"
                    size="lg"
                    placeholder="Cari Siswa..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup>
              </FloatingLabel>
            </Container>
            {<KelasCardListing siswa={siswa} search={search} />}
            <br />
            {<KelasFotoFooter gambar={gambar} />}
          </>
        ) : (
          <div className="text-center text-white my-5">
            <h4>Gagal Mengambil Data Siswa</h4>
            <button
              onClick={handleBack}
              className="btn btn-outline-light mt-3 d-inline-flex align-items-center gap-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Kembali</span>
            </button>
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

// {loading ? null : (

// )}
