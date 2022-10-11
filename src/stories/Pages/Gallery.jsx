import React from "react";
import { Carousel } from "../components/Carousel";
import { CardKegiatan } from "../components/CardKegiatan";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Gallery = () => {
  return (
    <div className="container">
      <div className="gallery-wraper">
        <h1 className="gallery-text-judul text-center">
          Gallery <span className="gallery-span-color">Kepusdaian</span>
        </h1>
        <p className="gallery-text-paragraph text-center">
          Gallery Documentasi Pada Saat Penerimaan Tamu
        </p>
        <div className="gallery-content-wraper">
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
