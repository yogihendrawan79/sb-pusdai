import React from "react";
import masjidpusdai from "../../assets/masjidpusdai.png";
import "./learning.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Learning = () => {
  return (
    <div className="container">
      <div className="learning-wraper">
        <div className="text-center">
          <h1 className="learning-text-judul">
            Alternative Learning Education For{" "}
            <span className="learning-span-color">Moslem</span>
          </h1>
          <div className="mt-5">
            <a href="https://blendedlearningpusdai.com">
              <h1 className="card-learning-text-judul-link">
                blendedlearningpusdai.com
              </h1>
            </a>
          </div>
          <div className="mt-5">
            <p className="learning-text-sub-judul">
              merupakan media alternatif dalam pembelajaran (tarbiyah) dan
              pendidikan non formal (ta’lim) bagi muslim di seluruh dunia,
              dengan menyuguhkan content video on demand dan live streaming
              berdasar pada kajian kematerian dasar keagamaan yang sistematis
              berikut internalisasi pembelajarannya. Mari bersama-sama kita
              tingkatkan ketaqwaan dengan taqwa yang sebenar-benarnya taqwa.
              Semoga hadirnya Pusdai Jabar sebagai wujud berlomba-lomba dalam
              kebaikan dan memberi kemanfaat bagi ummat.
            </p>
          </div>
        </div>
        <div className="">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="card-learning mt-5">
                <div className="text-center mt-3">
                  <img
                    src={masjidpusdai}
                    alt="imagerute"
                    className="gambar-learning"
                  />
                </div>
                <div className="text-center mt-3">
                  <h1 className="card-learning-text-judul">Judul</h1>
                  <p className="card-learning-text-paragraph">
                    Pusdai adalah lembaga dakwah di bawah naungan pemerintah
                    Provinsi Jawa Barat. Pusdai singkatan dari Pusat Dakwah
                    Islam dan dikenal dengan sebutan Pusdai Jabar.
                  </p>
                </div>
                <div className="text-center mb-4">
                  <button className="button-detail-learning">Detail</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="card-learning mt-5">
                <div className="text-center mt-3">
                  <img
                    src={masjidpusdai}
                    alt="imagerute"
                    className="gambar-learning"
                  />
                </div>
                <div className="text-center mt-3">
                  <h1 className="card-learning-text-judul">Judul</h1>
                  <p className="card-learning-text-paragraph">
                    Pusdai adalah lembaga dakwah di bawah naungan pemerintah
                    Provinsi Jawa Barat. Pusdai singkatan dari Pusat Dakwah
                    Islam dan dikenal dengan sebutan Pusdai Jabar.
                  </p>
                </div>
                <div className="text-center mb-4">
                  <button className="button-detail-learning">Detail</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="card-learning mt-5">
                <div className="text-center mt-3">
                  <img
                    src={masjidpusdai}
                    alt="imagerute"
                    className="gambar-learning"
                  />
                </div>
                <div className="text-center mt-3">
                  <h1 className="card-learning-text-judul">Judul</h1>
                  <p className="card-learning-text-paragraph">
                    Pusdai adalah lembaga dakwah di bawah naungan pemerintah
                    Provinsi Jawa Barat. Pusdai singkatan dari Pusat Dakwah
                    Islam dan dikenal dengan sebutan Pusdai Jabar.
                  </p>
                </div>
                <div className="text-center mb-4">
                  <button className="button-detail-learning">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
