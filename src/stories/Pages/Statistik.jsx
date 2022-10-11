import React from "react";
import usertag from "../assets/usertag.png";
import usermany from "../assets/usermany.png";
import useradd from "../assets/useradd.png";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Statistik = () => {
  return (
    <div className="container">
      <div className="statistik-tamu-wraper">
        <div className="">
          <h1 className="statistik-tamu-judul-text text-center">
            Statistik Kunjungan{" "}
            <span className="statistik-span-color">Tamu.</span>
          </h1>
        </div>
        <div className="card-statistik-wraper">
          <div className="card-statistik">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <img
                    src={usertag}
                    alt="imagerute"
                    className="logo-statistik"
                  />
                </div>
                <div className="mt-2">
                  <h1 className="card-statistik-text-paragraph text-center">
                    120
                  </h1>
                  <h1 className="card-statistik-text-judul text-center">
                    Kunjungan Baru
                  </h1>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <img
                    src={useradd}
                    alt="imagerute"
                    className="logo-statistik"
                  />
                </div>
                <div className="mt-2">
                  <h1 className="card-statistik-text-paragraph text-center">
                    50
                  </h1>
                  <h1 className="card-statistik-text-judul text-center">
                    Kunjungan Kembali
                  </h1>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="text-center">
                  <img
                    src={usermany}
                    alt="imagerute"
                    className="logo-statistik"
                  />
                </div>
                <div className="mt-2">
                  <h1 className="card-statistik-text-paragraph text-center">
                    330
                  </h1>
                  <h1 className="card-statistik-text-judul text-center">
                    Total Kunjungan
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
