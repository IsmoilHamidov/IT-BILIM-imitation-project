import React from "react";
import { useState } from "react";
import close_img from "../Assets/icons8-close.svg"
import { useTranslation } from "react-i18next";


function Video_Card() {
    const [t, i18n] = useTranslation("global");
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';  // Prevent scrolling
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';  // Enable scrolling
    };


    return ( 
        <div className="Video_Card Projects_Swiper" style={{ backgroundColor: "#F3F3F3" }}>
            <h2>{t("Other_titles.h4")}</h2>
                <div className="card" onClick={openModal}>
                    <img src="https://it-bilim.uz/uploads/sliders/adf06ff76464.jpg" alt="Video Thumbnail" />
                    <div className="black_box">
                        {t("Other_titles.text")}
                    </div>
                    <div className="Green_player">
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>


                {isModalOpen && (
                    <div className="modal Video_modal" onClick={closeModal}>
                    <div className="modal-content Video_madal_content" onClick={(e) => e.stopPropagation()}>
                            <img className="Closing" src={close_img} alt="" onClick={closeModal}/>
                        <iframe src="https://www.youtube.com/embed/WNzW3xuJELg?si=zQtpUqsnmvUNEzjZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    </div>
                )}
            </div>
     );
}

export default Video_Card;





