import React, { useState, useEffect } from "react";
import japan from "../Assets/40b396321a69.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import group from "../Assets/b582c776c9f5.jpg";
import coders from "../Assets/ed84f4ef2f2e.jpg";
import pearson from "../Assets/pearson_img.png";
import ModalForm from "./Modal_Form";
import ModalForm2 from "./Modal_Form2";
import ModalForm3 from "./Modal_Form3";
import { useTranslation } from "react-i18next";


function SwiperSlider() {
  const [t, i18n] = useTranslation("global");
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const totalCards = 6;
  const scrollDuration = 1.4;

  const updateCardWidth = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 620) {
      setCardWidth(viewportWidth * 0.95);
    } else if (viewportWidth <= 1200) {
      setCardWidth(viewportWidth / 2);
    } else {
      setCardWidth((viewportWidth / 2) * 0.903);
    }
  };

  useEffect(() => {
    updateCardWidth();

    const handleResize = () => {
      updateCardWidth();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateOffset = (direction) => {
    const viewportWidth = window.innerWidth;
    let visibleCards = 1;

    if (viewportWidth > 620 && viewportWidth <= 1200) {
      visibleCards = 2;
    } else if (viewportWidth > 1200) {
      visibleCards = 2;
    }

    const scrollAmount = cardWidth * (direction === 'next' ? 1 : -1);
    const maxOffset = (totalCards - visibleCards) * cardWidth;
    let newOffset = offset + scrollAmount;

    newOffset = Math.min(Math.max(newOffset, 0), maxOffset);

    setOffset(newOffset);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    if (isScrolling) return;

    setIsScrolling(true);
    const direction = event.deltaY > 0 ? 'next' : 'prev';

    updateOffset(direction);

    setTimeout(() => setIsScrolling(false), scrollDuration * 1000);
  };

  useEffect(() => {
    const swiperBottom = document.querySelector('.swiper_bottom');
    swiperBottom.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      swiperBottom.removeEventListener('wheel', handleScroll);
    };
  }, [cardWidth, offset, isScrolling]);

  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset >= (totalCards - (window.innerWidth > 620 ? 2 : 1)) * cardWidth;

  return (
    <div className="container-fluid h-auto Projects_Swiper" id="Projects">
      <div className="swiper_top">
        <h2>{t("SwiperCard_h.Title")}</h2>
        <div className="swiper_btn_group">
          <button
            onClick={() => {
              updateOffset('prev');
              setIsScrolling(true);
              setTimeout(() => setIsScrolling(false), scrollDuration * 1000);
            }}
            style={{
              backgroundColor: isPrevDisabled ? "#7eb649a3" : "#7eb649",
            }}
            disabled={isPrevDisabled}
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </button>
          <button
            onClick={() => {
              updateOffset('next');
              setIsScrolling(true);
              setTimeout(() => setIsScrolling(false), scrollDuration * 1000);
            }}
            style={{
              backgroundColor: isNextDisabled ? "#7eb649a3" : "#7eb649",
            }}
            disabled={isNextDisabled}
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>
      <div className="swiper_bottom">
        <div
          className="swiper_bottom_inner"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: `transform ${scrollDuration}s ease`,
          }}
        >
          <div className="swiper_bottom_Card">
            <img src={pearson} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>{t("SwiperCard_h.text1")}</h2>
                <p>
                    {t("SwiperCard_p.text1")}
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal1">{t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={japan} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>{t("SwiperCard_h.text2")}</h2>
                <p>
                    {t("SwiperCard_p.text2")}
                </p>
              </div>
              <a href="https://japan.it-bilim.uz/" target="_">
                {t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={team} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>{t("SwiperCard_h.text3")}</h2>
                <p>
                    {t("SwiperCard_p.text3")}
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal2">{t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={bilgi} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
               <h2>{t("SwiperCard_h.text4")}</h2>
                <p>
                    {t("SwiperCard_p.text4")}
                </p>
              </div>
              <a href="https://bilgi.uz/uz/" target="_">
                {t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={group} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>{t("SwiperCard_h.text5")}</h2>
                <p>
                    {t("SwiperCard_p.text5")}
                </p>
              </div>
              <a href="https://academy.it-bilim.uz/" target="_">
                {t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={coders} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>{t("SwiperCard_h.text6")}</h2>
                <p>
                    {t("SwiperCard_p.text6")}
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal3">{t("SwiperCard_p.batafsil")}{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modals Part */}
          
          {/* Modal 1 */}
          <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel first_modal" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal1.h1")}</h2>
                            <i>
                              {t("Modal1.text1")}
                            </i>
                            <i>
                              {t("Modal1.text2")}
                            </i>
                            <i>
                              {t("Modal1.text3")}
                            </i>

                            <ul>
                                <li>
                                   <i>{t("Modal1.Li_1")}</i>
                                </li>
                                <li>
                                   <i>{t("Modal1.Li_2")}</i>
                                </li>
                                <li>
                                   <i>{t("Modal1.Li_3")}</i>
                                </li>
                                <li>
                                   <i>{t("Modal1.Li_4")}</i>
                                </li>
                                <li>
                                   <i>{t("Modal1.Li_5")}</i>
                                </li>
                            </ul>

                            <i>{t("Modal1.text4")}</i>
                            <i>{t("Modal1.text5")} 
                              <a href="https://www.it-istedod.uz/index-uz" target="_" className="mx-2" style={{color:"#0066cc", textDecoration:"none"}}>{t("Modal1.text5.1")}</a>
                                {t("Modal1.text5.2")}
                            </i>
                            <b>{t("Modal1.text6")}</b>
                              
                            <i><u style={{color: "#0066cc"}}>{t("Modal1.text7")}</u></i>
                              
                            <p>
                              {t("Modal1.text8")}
                              <a href="tel:+998555181199" target="_">
                                <br />{t("Modal1.text_number1")}
                                <br />{t("Modal1.text_number2")}
                              </a>  
                            </p>

                            <p>{t("Modal1.text9")} <a href="https://it-bilim.uz/info@it-bilim.uz" target="_">{t("Modal1.text10")}</a></p>
                           

                          </div>

                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal_all.h")}</h2>
                              <p>{t("Modal_all.text1")}</p>
                              <ModalForm/>
                          </div>
                      </div>
                    </div>
                </div>
          </div>


          {/* Modal 2 */}
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal2.h")}</h2>
                            <i>
                                {t("Modal2.text1")}
                            </i>
                            <i>
                              {t("Modal2.text2")}
                            </i>
                           
                            <ul>
                                <li>
                                  <i>{t("Modal2.Li_1")}</i>
                                </li>
                                <li>
                                  <i>{t("Modal2.Li_2")}</i>
                                </li>
                            </ul>

                            <b>{t("Modal2.text3")}</b>
                            
                          </div>

                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal_all.h")}</h2>
                              <p>{t("Modal_all.text1")}</p>
                              <ModalForm2/>
                          </div>
                      </div>
                    </div>
                </div>
          </div>



          {/* Modal 3 */}
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal3.h")}</h2>
                            <i>
                              <b>{t("Modal3.text1")}</b>
                            </i>
                            <i>
                                {t("Modal3.text2")}
                            </i>
                            <i>
                                {t("Modal3.text3")}
                            </i>
                           
                        
                            <ul style={{listStyle:"none"}} className="p-0">
                                <li style={{fontSize:"16px", fontWeight:"600"}}>
                                    <i>
                                        <u>
                                          <b>{t("Modal3.Li_1")}</b>
                                        </u>
                                    </i>
                                </li>
                                <li>
                                  <i>{t("Modal3.Li_2")}</i>
                                </li>
                                <li>
                                  <i>{t("Modal3.Li_2")}</i>
                                </li>
                                <li>
                                  <i>{t("Modal3.Li_3")}</i>
                                </li>
                                <li>
                                  <i>{t("Modal3.Li_4")}</i>
                                </li>
                                <li>
                                  <i>{t("Modal3.Li_5")}</i>
                                </li>
                            </ul>

                            <i>{t("Modal3.text5")}</i>
                            <i>
                              <a href="https://docs.google.com/forms/d/13ebv5ooo3i3WDxnV8K1yGooIqTAGRBLbPFv_OPQd4yc" target="_">
                                 {t("Modal3.text6")}
                              </a>  
                              <br />
                              <a href="https://forms.gle/Us8b9xSbNpwKzaZF9" target="_">
                                 {t("Modal3.text7")}
                              </a>  
                              <br />
                              <a href="https://docs.google.com/forms/d/1EBST-4iNu8vrzWKLGCbECbDwqbVap4M0wBkTx0ycYhA" target="_">
                                  {t("Modal3.text8")}
                              </a>  
                            </i>

                          </div>


                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 className="modal-title m-0" id="exampleModalLabel">{t("Modal_all.h")}</h2>
                              <p>{t("Modal_all.text1")}</p>
                              <ModalForm3/>
                          </div>
                      </div>
                    </div>
                </div>
          </div>
    </div>
  );
}

export default SwiperSlider;
