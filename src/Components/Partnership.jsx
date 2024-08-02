import React, { useEffect } from "react";
import Slider from "react-slick";
import img1 from "../Assets/slider_left_img1.png";
import img2 from "../Assets/slider_left_img2.jpg";
import img3 from "../Assets/slider_left_img3.png";
import img4 from "../Assets/slider_left_img4.png";
import img5 from "../Assets/slider_left_img5.jpg";
import img6 from "../Assets/slider_left_img6.png";
import img7 from "../Assets/slider_left_img7.jpg";
import img8 from "../Assets/slider_left_img8.jpg";
import img9 from "../Assets/slider_left_img9.jpg";
import img10 from "../Assets/slider_left_img10.jpg";
import img11 from "../Assets/slider_left_img11.png";
import img12 from "../Assets/slider_left_img12.jpg";
import img13 from "../Assets/slider_left_img13.png";
import img14 from "../Assets/slider_left_img14.png";
import img15 from "../Assets/slider_left_img15.png";
import img16 from "../Assets/slider_left_img16.png";
import img17 from "../Assets/slider_left_img17.png";
import img18 from "../Assets/slider_left_img18.png";
import img19 from "../Assets/slider_left_img19.png";
import img20 from "../Assets/slider_left_img20.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Partnership() {
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
    ];

    useEffect(() => {
        const handleResize = () => {
            window.dispatchEvent(new Event('resize'));
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settingsLeft = {
        dots: false,
        infinite: true,
        speed: 4500,  
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,  
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settingsRight = {
        dots: false,
        infinite: true,
        speed: 4500,  
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500, 
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Projects_Swiper" id="Partners" style={{ backgroundColor: "#F3F3F3" }}>
            <h2>Hamkorlar</h2>
            <div className="slider-container">
                <Slider {...settingsLeft}>
                    {images.map((image, index) => (
                        <div key={index} className="swiper_slide">
                            <img src={image} alt={`slide-${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="slider-container">
                <Slider {...settingsRight}>
                    {images.map((image, index) => (
                        <div key={index + images.length} className="swiper_slide">
                            <img src={image} alt={`slide-${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Partnership;
