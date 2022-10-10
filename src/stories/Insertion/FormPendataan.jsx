import React from "react";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const FormPendataan = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6">
      <div className="card-form-input-side mb-3">
        <div className="mt-5">
          <h1
            className="form-input-judul-text text-center"
            style={{
              display: "flex",
              justifyContent: "center",
              placeItems: "center",
            }}
          >
            Pendataan <span className="form-input-span-color">Tamu.</span>
          </h1>
          <p className="form-input-judul-paragraph text-center">
            Silahkan Isi Sesuai Instruksi
          </p>
        </div>
        <div className="form-content-wraper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group py-2">
                <label className="label-form-input">Jenis Identitas</label>
                <select
                  className="px-2"
                  style={{
                    borderRadius: "10px",
                    borderColor: "#24A19C",
                    fontSize: "13px",
                    width: "100%",
                    height: "35px",
                  }}
                >
                  <option disabled selected="true">
                    Pilih Jenis Identitas
                  </option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group ">
                <label className="label-form-input">
                  Identitas : Email / Nomor Handphone
                </label>
                <input
                  type="text-form-input"
                  className="form-control"
                  placeholder="Email/Nomor Handphone..."
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="form-group ">
                <label className="label-form-input">Nama Lengkap</label>
                <input
                  type="text-form-input"
                  className="form-control"
                  placeholder="Nama Lengkap..."
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="form-group py-2">
                <label className="label-form-input">Tujuan Janji</label>
                <select
                  className="px-2"
                  style={{
                    borderRadius: "10px",
                    borderColor: "#24A19C",
                    fontSize: "13px",
                    width: "100%",
                    height: "35px",
                  }}
                >
                  <option disabled selected="true">
                    Tujuan Janji
                  </option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="form-group ">
                <label className="label-form-input">Tanggal Mulai</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Nama Lengkap..."
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="form-group ">
                <label className="label-form-input">Tanggal Selesai</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Nama Lengkap..."
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group ">
                <label className="label-form-input">Tempat Target</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group py-2">
                <label className="label-form-input">Keterangan</label>
                <textarea
                  rows={4}
                  type="text"
                  className="form-control"
                  placeholder="Keterangan..."
                  style={{
                    borderRadius: "20px",
                    borderColor: "#6A9FA7",
                    fontSize: "13px",
                    fontFamily: "Montserrat,sans-serif",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button className="button-form-input">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
