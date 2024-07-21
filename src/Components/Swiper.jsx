import japan from "../Assets/40b396321a69.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import group from "../Assets/b582c776c9f5.jpg";
import coders from "../Assets/ed84f4ef2f2e.jpg";
import pearson from "../Assets/pearson_img.png";
import React, { useState, useEffect, useContext } from "react";



function SwiperSlider() {

    // Swiper
    const [offset, setOffset] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const totalCards = 6;
    const cardWidth = isMobile ? 110 : 40.33; 

    const handleScroll = (event) => {
      event.preventDefault();
      const scrollSpeed = 0.3;
      setOffset((prevOffset) => {
        const newOffset = prevOffset + event.deltaY * scrollSpeed;
        const maxOffset = (totalCards - 1) * cardWidth;
        return Math.min(Math.max(newOffset, 0), maxOffset);
      });
    };

    useEffect(() => {
      const swiperBottom = document.querySelector(".swiper_bottom");
      swiperBottom.addEventListener("wheel", handleScroll, { passive: false });

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        swiperBottom.removeEventListener("wheel", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const snapToCard = () => {
      setOffset((prevOffset) => {
        const nearestCardOffset = Math.round(prevOffset / cardWidth) * cardWidth;
        return Math.min(Math.max(nearestCardOffset, 0), (totalCards - 1) * cardWidth);
      });
    };

    useEffect(() => {
      const handleScrollEnd = () => {
        snapToCard();
      };

      const swiperBottom = document.querySelector(".swiper_bottom");
      swiperBottom.addEventListener("scrollend", handleScrollEnd);

      return () => {
        swiperBottom.removeEventListener("scrollend", handleScrollEnd);
      };
    }, [offset]
    );


  return (
    <div className="container-fluid h-auto Projects_Swiper" id="Projects">



      <div className="swiper_top">
        <h2>Loyihalar</h2>
        <div className="swiper_btn_group">
          <button
            onClick={() => setOffset((prev) => Math.max(prev - cardWidth, 0))}
            style={{
              backgroundColor: offset === 0 ? "#7eb649a3" : "#7eb649",
            }}
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </button>
          <button
            onClick={() =>
              setOffset((prev) =>
                Math.min(prev + cardWidth, (totalCards - 1) * cardWidth)
              )
            }
            style={{
              backgroundColor:
                offset === (totalCards - 1) * cardWidth
                  ? "#7eb649a3"
                  : "#7eb649",
            }}
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>




      <div className="swiper_bottom">
        <div
          className="swiper_bottom_inner"
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          <div className="swiper_bottom_Card">
                <img src={pearson} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                  <h2>Xalqaro Test Markazi</h2>
                  <p>
                    IT-Bilimlarini rivojlanritish markazi Pearson VUE xalqaro test
                    markazi bilan hamkorlikni yo`lga qo`ydi.
                  </p>
              </div>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal">Batafsil{" "}
                    <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                </a>
               
            </div>

          </div>
          <div className="swiper_bottom_Card">
            <img src={japan} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                  <h2>IT BILIM JAPAN</h2>
                  <p>
                    Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni
                    o'qitish va tayyorlash loyihasi
                  </p>
              </div>
                <a href="https://japan.it-bilim.uz/">
                  Batafsil{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </a>
            </div>    
          </div>

          <div className="swiper_bottom_Card">
            <img src={team} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                  <h2>Maqsadli qarz</h2>
                  <p>IT sohasida biznesni rivojlantirish va kengaytirish uchun</p>
              </div>
                <a href="#">
                  Batafsil{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{marginLeft: "8px" }}
                  ></i>
                </a>
            </div>
          </div>

          <div className="swiper_bottom_Card">
            <img src={bilgi} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                  <h2>Bilgi.uz ta`lim marketpleysi</h2>
                  <p>
                    imtiyozli muddatli to`lov evaziga IT kurslarning katta tanlovi
                  </p>
              </div>
                <a href="https://bilgi.uz/uz/">
                  Batafsil{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{marginLeft: "8px" }}
                  ></i>
                </a>
            </div>
          </div>

          <div className="swiper_bottom_Card">
            <img src={group} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                  <h2>IT BILIM Academy</h2>
                  <p>innovatsion ta’lim muassasasi </p>
              </div>
                <a href="https://academy.it-bilim.uz/">
                  Batafsil{" "}
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{marginLeft: "8px" }}
                  ></i>
                </a>
            </div>
          </div>

          <div className="swiper_bottom_Card">
            <img src={coders} alt="" />
            <div className="swiper_bottom_card_holder">
                <div className="swiper_bottom_card_holder_top">
                    <h2>Ish bilan ta’minlash loyihasi</h2>
                    <p>
                      yosh IT mutaxassislarini amaliyot o’tashlari uchun ijtimoiy loyiha
                    </p>
                </div>

                  <a href="#">
                    Batafsil{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      style={{marginLeft: "8px" }}
                    ></i>
                  </a>
            </div>
          </div>
        </div>






        {/* Modals Part */}        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
          </div>


      </div>
    </div>
  );
}

export default SwiperSlider;
