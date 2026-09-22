import React from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "../RPL.css";
import Foto from "../../assets/FotoKelas.jpg";

export default function KelasFotoSlide(props) {
  const gambar = props.props.gambar;
  const imageForSlider = [];
  gambar.map((item) => {
    if (item.gambar_jenis === "wajib") {
      imageForSlider.push(item);
    }
  });
  

  return props.props.loading ? null : (
    <Carousel className="z-0">
      {imageForSlider.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.gambar_nama}
            alt={`Foto Kelas ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
