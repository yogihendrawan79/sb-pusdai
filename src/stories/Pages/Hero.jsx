import React from "react";
import substractwhite from "../assets/Subtractwhite.png";
import pusdaiputih from "../assets/pusdaiputih.png";
import linegroup from "../assets/linegroup.png";
import substrctside from "../assets/Subtractwhiteside.png";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Hero = () => {
  return (
    <div className="container">
      <div className="header-wraper">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="">
              <h1 className="header-judul-text">
                Buku <span className="header-span-color">Tamu.</span>
              </h1>
              <h1 className="header-sub-judul-text">Pusdai</h1>
              <h1 className="header-sub-judul-text">
                Jawa <span className="header-span-color">Barat</span>
              </h1>
              <div className="">
                <h1 className="header-sub-judul-paragraph">Mengenal Pusdai</h1>
                <p className="col-md-8 header-judul-paragraph">
                  Pusdai adalah lembaga dakwah di bawah naungan pemerintah
                  Provinsi Jawa Barat. Pusdai singkatan dari Pusat Dakwah Islam
                  dan dikenal dengan sebutan Pusdai Jabar.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="">
                <a href="/tamu">
                  <button className="button-header">Daftar Tamu</button>
                </a>
              </div>
              <div className="px-3">
                <a href="/cekstatus">
                  <button className="button-header">Cek Status</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-md-block d-none">
            <div className="card-buku-tamu-wraper">
              <div className="card-buku-tamu">
                <div className="d-flex">
                  <div className="gambar-card-buku-tamu text-md-start">
                    <img
                      src={substractwhite}
                      alt="imagerute"
                      className="logo-substract"
                    />
                  </div>
                  <div className="">
                    <div className="judul-card-buku-tamu-wraper">
                      <img
                        src={pusdaiputih}
                        alt="imagerute"
                        className="logo-pusdai-putih"
                      />
                      <h1 className="card-buku-tamu-text-judul">
                        Buku{" "}
                        <span className="card-buku-tamu-color-span">Tamu.</span>
                      </h1>
                      <p className="col-md-10 card-buku-tamu-text-paragraph">
                        Pusdai adalah lembaga dakwah di bawah naungan pemerintah
                        Provinsi Jawa Barat. Pusdai singkatan dari Pusat Dakwah
                        Islam dan dikenal dengan sebutan Pusdai Jabar.
                      </p>
                      <img
                        src={linegroup}
                        alt="imagerute"
                        className="logo-line-group"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-md-end gambar-card-buku-tamu-side">
                  <img
                    src={substrctside}
                    alt="imagerute"
                    className="logo-substract-side"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
