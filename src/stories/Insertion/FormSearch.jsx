import React from "react";
import PropTypes from "prop-types";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const FormSearch = ({ email, kode }) => {
  return (
    <div className="cek-status-wraper">
      <div className="card-cek-status">
        <div className="search-cek-wraper text-center">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <label className="label-cek-status">Masukan email</label>
              <input type="search" placeholder="Masukan Email" value={email} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <label className="label-cek-status">Masukan Kode</label>
              <input type="search" placeholder="Masukan Kode" value={kode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormSearch.propTypes = {
  email: PropTypes.string.isRequired,
  kode: PropTypes.string.isRequired,
};

FormSearch.defaultProps = {};
