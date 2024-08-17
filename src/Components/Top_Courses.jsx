import React, { useState, useEffect } from 'react';
import cardImg1 from '../Assets/card_img1.png';
import cardImg2 from '../Assets/card_img2.png';
import cardImg3 from '../Assets/card_img3.jpg';
import cardImg4 from '../Assets/card_img4.png';
import cardImg5 from '../Assets/card_img5.jpg';
import cardImg6 from '../Assets/card_img6.jpg';
import { useTranslation } from "react-i18next";

function TopCourses() {
  const { t, i18n } = useTranslation("global");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: cardImg1, 
        p1: t('C_card1.h'),
        p2: t('C_card1.h2'),
        grey_text: t('C_card1.text1'),
        price1: t('C_card1.text4_price'),
        price2: t('C_card1.text4_price2'),
        duration: t('C_card1.oy'),
        link: "https://bilgi.uz/uz/courses/marketing/it-recruitment/"
      },
      {
        id: 2,
        image: cardImg2, 
        p1: t('C_card2.h'),
        p2: t('C_card2.h2'),
        grey_text: t('C_card2.text1'),
        price1: t('C_card2.text4_price'),
        price2: t('C_card2.text4_price2'),
        duration: t('C_card2.oy'),
        link: "https://bilgi.uz/uz/courses/Project%20manager-/project-manager/Backend-Lead-online/"
      },
      {
        id: 3,
        image: cardImg3, 
        p1: t('C_card3.h'),
        p2: t('C_card3.h2'),
        grey_text: t('C_card3.text1'),
        price1: t('C_card3.text4_price'),
        price2: t('C_card3.text4_price2'),
        duration: t('C_card3.oy'),
        link: "https://bilgi.uz/uz/courses/programmirovanie/mobilnaya-razrabotka/android-ios-razrabotka-/"
      },
      {
        id: 4,
        image: cardImg4, 
        p1: t('C_card4.h'),
        p2: t('C_card4.h2'),
        grey_text: t('C_card4.text1'),
        price1: t('C_card4.text4_price'),
        price2: t('C_card4.text4_price2'),
        duration: t('C_card4.oy'),
        link: "https://bilgi.uz/uz/courses/programmirovanie/php-razrabotka/net-/net-backend/"
      },
      {
        id: 5,
        image: cardImg5, 
        p1: t('C_card5.h'),
        p2: t('C_card5.h2'),
        grey_text: t('C_card5.text1'),
        price1: t('C_card5.text4_price'),
        price2: t('C_card5.text4_price2'),
        duration: t('C_card5.oy'),
        link: "https://bilgi.uz/courses/programmirovanie/frontend-razrabotka/"
      },
      {
        id: 6,
        image: cardImg6,
        p1: t('C_card6.h'),
        p2: t('C_card6.h2'),
        grey_text: t('C_card6.text1'),
        price1: t('C_card6.text4_price'),
        price2: t('C_card6.text4_price2'),
        duration: t('C_card6.oy'),
        link: "https://bilgi.uz/courses/programmirovanie/php-razrabotka/java/java-razrabotchik-s/",
        button_text: t('C_card6.button_text')
      }
    ];

    setCards(mockData);
  }, [t]);  // <-- Add 't' as a dependency

  return (
    <div className="container-fluid Projects_Swiper Top_course" id='Courses' style={{ backgroundColor: "#F3F3F3" }}>
      <h2>{t("C_card1.Title")}</h2>
      <div className="Courses_card_box">
        {cards.map((info) => (
          <a key={info.id} className="Course_cards" href={info.link} target="_">
            <img src={info.image} alt={`Course ${info.id}`} />

            <div className="Line_holder">
              <div className="first_line_text">
                <p style={{ color: "#7eb649" }}>{info.p1}</p>
                <p>{info.p2}</p>
              </div>
              <p className="grey_text">{info.grey_text}</p>
              <div className="second_line_text">
                <div>
                  <p className="mb-2">{t("C_card1.text2")}</p>
                  <h5>{info.price1}</h5>
                </div>
                <div>
                  <p className="mb-2">{t("C_card1.text3")}</p>
                  <h5>{info.price2}</h5>
                </div>
              </div>
              <span style={{fontWeight: "600" }}>
                <i className="fa-regular fa-clock me-2" style={{ color: "#7eb649"}}></i>{info.duration}
              </span>
            </div>
          </a>
        ))}
      </div>
      <a className='Top_course_button' href="https://bilgi.uz/uz/" target="_">{t("C_card6.button_text")}</a>
    </div>
  );
}

export default TopCourses;
