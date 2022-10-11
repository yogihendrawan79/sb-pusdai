import React from "react";
import logobank from "../assets/logobank.png";
import logotikomdik from "../assets/logotikomdik.png";
import pusdaiputih from "../assets/pusdaiputih.png";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () => {
  return (
    <div className="container">
      <div className="about-wraper">
        <div className="">
          <h1 className="about-judul-text text-center">
            Pusdai <span className="about-span-color">Jawabarat</span>
          </h1>
        </div>
        <div className="about-content-margin">
          <div className="about-content-wraper">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="card-text-about-wraper">
                  <div className="card-text-about">
                    <div className="">
                      <a href="https://www.youtube.com/c/PusdaiJabar">
                        <h1 className="card-text-about-judul">
                          Youtube Channel Pusdai
                        </h1>
                      </a>
                    </div>
                    <div className="wraper-iframe">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube.com/embed/rZDtNZhpENk"
                          title="YouTube video"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="">
                        <img
                          src={logobank}
                          alt="imagerute"
                          className="logo-bank"
                        />
                      </div>
                      <div className="mt-4">
                        <img
                          src={logotikomdik}
                          alt="imagerute"
                          className="logo-tikomdik"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="card-text-about-wraper">
                  <div className="card-side-about">
                    <div className="text-center mt-5">
                      <img
                        src={pusdaiputih}
                        alt="imagerute"
                        className="logo-pusdai-putih"
                      />
                      <h1 className="card-side-about-text mt-2">
                        Buku{" "}
                        <span className="color-span-side-about">Tamu.</span>
                      </h1>
                      <div className="mt-5">
                        <div className="line-side-about"></div>
                      </div>
                      <div className="mt-5">
                        <div className="line-side-about"></div>
                      </div>
                      <div className="mt-5">
                        <div className="line-side-about"></div>
                      </div>
                      <div className="mt-5">
                        <div className="line-side-about"></div>
                      </div>
                      <div className="mt-5">
                        <div className="line-side-about"></div>
                      </div>
                      <div className="mt-5">
                        <p className="card-side-about-paragraph">
                          Pusdai adalah lembaga dakwah di bawah naungan
                          pemerintah Provinsi Jawa Barat. Pusdai singkatan dari
                          Pusat Dakwah Islam dan dikenal dengan sebutan Pusdai
                          Jabar.
                        </p>
                      </div>
                    </div>
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
