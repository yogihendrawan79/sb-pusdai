import React from "react";
import "./tablekegiatan.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const TableKegiatan = () => {
  return (
    <div className="table-kegiatan">
      <div className="table-kegiatan-wraper">
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="mt-2">
              <h1 className="table-kegiatan-text-judul">Judulnya</h1>
              <p className="table-kegiatan-text-paragraph">Deskripsinya</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="mt-2">
              <h1 className="table-kegiatan-text-judul">Judulnya</h1>
              <p className="table-kegiatan-text-paragraph">Deskripsinya</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="mt-2">
              <h1 className="table-kegiatan-text-judul">Judulnya</h1>
              <p className="table-kegiatan-text-paragraph">Deskripsinya</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="mt-2">
              <h1 className="table-kegiatan-text-judul">Judulnya</h1>
              <p className="table-kegiatan-text-paragraph">Deskripsinya</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
