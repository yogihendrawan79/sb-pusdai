import React from "react";
import { TableKegiatan } from "../components/TableKegiatan";
import { CardKegiatan } from "../components/CardKegiatan";
import { Carousel } from "../components/Carousel";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Agenda = () => {
  return (
    <div className="container">
      <div className="cara-menggunakan-wraper">
        <div className="">
          <h1 className="cara-menggunakan-judul-text text-center">
            Agenda Kegiatan{" "}
            <span className="cara-menggunakan-span-color">Pusdai</span>
          </h1>
          <p className="cara-menggunakan-judul-paragraph text-center">
            Agenda Agenda Kegiatan Pusdai Jawabarat
          </p>
        </div>
        <div className="card-cara-wraper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="mt-2">
                <TableKegiatan />
              </div>
              <div className="mt-2">
                <TableKegiatan />
              </div>
              <div className="mt-2">
                <TableKegiatan />
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: 1200,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 64,
            }}
          >
            <Carousel show={3}>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
              <div>
                <div style={{ padding: 8 }}>
                  <CardKegiatan />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
