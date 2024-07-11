import React, { useState, useEffect } from 'react';
import cardImg1 from '../Assets/card_img1.png';
import cardImg2 from '../Assets/card_img2.png';
import cardImg3 from '../Assets/card_img3.jpg';
import cardImg4 from '../Assets/card_img4.png';
import cardImg5 from '../Assets/card_img5.jpg';
import cardImg6 from '../Assets/card_img6.jpg';

function TopCourses() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: cardImg1,
        p1: "IT Recruitment",
        p2: "HR",
        grey_text: "IT Bilim Academy",
        price1: "10 750 000 so’mdan",
        price2: "680 556 so’mdan / oyga",
        duration: "3 oy"
      },
      {
        id: 2,
        image: cardImg2,
        p1: "Backend - Lead",
        p2: "PM",
        grey_text: "Uacademy",
        price1: "5 912 500 so’mdan",
        price2: "374 306 so’mdan / oyga",
        duration: "2 oy"
      },
      {
        id: 3,
        image: cardImg3,
        p1: "ANDROID & iOS Dasturlash",
        p2: "Mobil dasturlash",
        grey_text: "PROWEB",
        price1: "12 900 000 so’mdan",
        price2: "816 667 so’mdan / oyiga",
        duration: "8 oy"
      },
      {
        id: 4,
        image: cardImg4,
        p1: ".NET backend",
        p2: ".NET",
        grey_text: "HAAD LC",
        price1: "11 825 000 so’mdan",
        price2: "748 611 so’mdan / oyiga",
        duration: "5 oy"
      },
      {
        id: 5,
        image: cardImg5,
        p1: "Frontend ishlab chiquvchi (4 месяца)",
        p2: "Platinum",
        grey_text: "Coursera",
        price1: "6 020 000 so'mdan",
        price2: "381 111 so'mdan / oyiga",
        duration: "4 oy"
      },
      {
        id: 6,
        image: cardImg6,
        p1: "Java ishlab chiquvchi",
        p2: "Platinum",
        grey_text: "IT PARK UNIVERSITY UpSkill",
        price1: "9 836 250 so'mdan",
        price2: "622 708 so'mdan / oyiga",
        duration: "12 oy"
      }
    ];

    setTimeout(() => {
      setCards(mockData);
    }, 1000); 
  }, []);

  return (
    <div className="container-fluid Projects_Swiper Top_course" style={{ backgroundColor: "#F3F3F3" }}>
      <h2>TOP Kurslar</h2>
      <div className="Courses_card_box">
        {cards.map((info) => (
          <a key={info.id} className="Course_cards" href="https://bilgi.uz/uz/courses/marketing/it-recruitment/">
            <img src={info.image} alt={`Course ${info.id}`} />

            <div className="Line_holder">
              <div className="first_line_text">
                <p style={{ color: "#7eb649" }}>{info.p1}</p>
                <p>{info.p2}</p>
              </div>
              <p className="grey_text">{info.grey_text}</p>
              <div className="second_line_text">
                <div>
                  <p className="mb-2">Narxi</p>
                  <h5>{info.price1}</h5>
                </div>
                <div>
                  <p className="mb-2">To'lov narxi</p>
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
    </div>
  );
}

export default TopCourses;
