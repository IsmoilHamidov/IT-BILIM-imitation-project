import React, { useState, useEffect } from "react";
import it_bilim from "../Assets/videos/IT-Bilim_uz.mp4";
import it_bilimRu from "../Assets/videos/IT_Bilim_ru.mp4";
import { useTranslation } from "react-i18next";

function Carusel_ads() {
  const [t, i18n] = useTranslation("global");
  const [key, setKey] = useState(0); // This helps to change video


  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  const videoSrc = i18n.language === "uz" ? it_bilim : it_bilimRu;

  return (
    <>
      <div className="Carsuel_box">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="1000"
          style={{ zIndex: "1" }}
          key={key} 
        >
          <video
            controls
            className="media"
            width="600"
            autoPlay
            loop
            muted
            playsInline
            style={{ display: "block" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

            <svg
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg5 d-none d-md-block"
            >
                <g clipPath="url(#clip0_645_123)">
                    <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                </g>
                <defs>
                    <clipPath id="clip0_645_123">
                        <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>

            <svg
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg6 d-none d-md-block"
            >
                <g clipPath="url(#clip0_645_123)">
                    <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                </g>
                <defs>
                    <clipPath id="clip0_645_123">
                        <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>

            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-md-flex">
                <div className="container-fluid p-0 ps-4">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler w-50" type="button"></button>
                <div
                    className="collapse navbar-collapse position-relative"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 "></ul>
                </div>
                </div>
            </nav>

        </div>
      </div>
    </>
  );
}

export default Carusel_ads;
