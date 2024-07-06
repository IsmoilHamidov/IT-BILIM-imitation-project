import React, { useState, useEffect } from "react";
import japan from "../Assets/40b396321a69.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import group from "../Assets/b582c776c9f5.jpg";
import coders from "../Assets/ed84f4ef2f2e.jpg";
import pearson from "../Assets/pearson_img.png";

function SwiperSlider() {
  const [offset, setOffset] = useState(0);
  const totalCards = 3; // Adjust the number of cards here
  const cardWidth = 100; // Assuming each card takes 100% of the container width

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    const scrollSpeed = 0.2;
    setOffset((prevOffset) => {
      const newOffset = prevOffset + event.deltaY * scrollSpeed;
      return Math.min(Math.max(newOffset, 0), (totalCards - 1) * cardWidth);
    });
  };

  useEffect(() => {
    const swiperBottom = document.querySelector(".swiper_bottom");
    swiperBottom.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      swiperBottom.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid h-auto Projects_Swiper">
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
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="swiper_bottom_Card">
              <img src={pearson} alt="" />
              <h2 className="m-0">Xalqaro Test Markazi</h2>
              <p>
                IT-Bilimlarini rivojlanritish markazi Pearson VUE xalqaro test
                markazi bilan hamkorlikni yo`lga qo`ydi.
              </p>
              <a>
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
            <div className="swiper_bottom_Card">
              <img src={japan} alt="" />
              <h2 className="m-0">IT BILIM JAPAN</h2>
              <p>
                Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni
                o'qitish va tayyorlash loyihasi
              </p>
              <a href="https://japan.it-bilim.uz/">
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
            <div className="swiper_bottom_Card">
              <img src={team} alt="" />
              <h2 className="m-0">Maqsadli qarz</h2>
              <p>IT sohasida biznesni rivojlantirish va kengaytirish uchun</p>
              <a>
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
            <div className="swiper_bottom_Card">
              <img src={bilgi} alt="" />
              <h2 className="m-0">Bilgi.uz ta`lim marketpleysi</h2>
              <p>
                imtiyozli muddatli to`lov evaziga IT kurslarning katta tanlovi
              </p>
              <a href="https://bilgi.uz/uz/">
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
            <div className="swiper_bottom_Card">
              <img src={group} alt="" />
              <h2 className="m-0">IT BILIM Academy</h2>
              <p>innovatsion ta’lim muassasasi </p>
              <a href="https://academy.it-bilim.uz/">
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
            <div className="swiper_bottom_Card">
              <img src={coders} alt="" />
              <h2 className="m-0">Ish bilan ta’minlash loyihasi</h2>
              <p>
                yosh IT mutaxassislarini amaliyot o’tashlari uchun ijtimoiy loyiha
              </p>
              <a>
                Batafsil{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "22px", marginLeft: "8px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwiperSlider;

