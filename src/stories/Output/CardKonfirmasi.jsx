import React from "react";
import pusdaiimej from "../assets/pusdaiimej.png";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardKonfirmasi = () => {
  return (
    <div className="card-hasil-status-wraper">
      <div className="card-hasil-status">
        <div className="card-hasil-status-text-wraper">
          <div className="row">
            <div className="col-sm-6 col-md-2 col-lg-2">
              <div className="text-center mt-2">
                <img src={pusdaiimej} alt="imagerute" className="logo-single" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="mt-3">
                <h1 className="card-hasil-status-text-judul">farhankebab</h1>
                <p className="card-for-status-text-paragraph">
                  2022-09-21.
                  <span className="px-1">qwerty12</span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="text-center">
                <div className="card-for-status">
                  <div className="text-center">
                    <h1 className="card-for-status-text-judul">Status</h1>
                    <h1 className="card-for-status-text-sub-judul">
                      Belum Di Konfirmasi
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
