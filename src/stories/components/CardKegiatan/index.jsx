import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pusdaijpg from "../../assets/Pusdai.jpg";
import "./cardkegiatan.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardKegiatan = () => {
  return (
    <div className="card-kegiatan-wraper">
      <div className="card-kegiatan">
        <img
          src={pusdaijpg}
          alt="imagerute"
          className="gambar-kegiatan-agenda"
        />
        <div className="card-content-kegiatan">
          <div className="card-kegiatan-judul-wraper">
            <h1 className="card-kegiatan-judul-text">Judul Kegiatan</h1>
            <h1 className="card-kegiatan-sub-judul">Sub Judul</h1>
            <p className="card-kegiatan-paragraph-judul">
              Pusdai adalah lembaga dakwah di bawah naungan pemerintah Provinsi
              Jawa Barat. Pusdai singkatan dari Pusat Dakwah Islam dan dikenal
              dengan sebutan Pusdai Jabar.
            </p>
          </div>
          <div className="">
            <span className="card-kegiatan-span">
              Selengkapnya{" "}
              <FontAwesomeIcon
                icon={faAnglesRight}
                style={{ color: "#6A9FA7", height: "15px" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
