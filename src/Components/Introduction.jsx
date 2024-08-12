import React, { useState, useEffect, useRef } from 'react';
import japan from "../Assets/40b396321a69.jpg";
import partnership from "../Assets/download.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import IT_bilim_logo from "../Assets/logo1_uz.svg";
import academy from "../Assets/b582c776c9f5.jpg";
import Bandlik from "../Assets/ed84f4ef2f2e.jpg";
import Particles_Component from "./Particles";



function Introduction() {


  const [imageIndex, setImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [pauseForButtonClick, setPauseForButtonClick] = useState(false);
  const [visibleButtonCount, setVisibleButtonCount] = useState(4);
  const intervalRef = useRef(null);
  const activeButtonRef = useRef(null);

  const buttons = [
    'Maqsadli qarz', 'IT BILIM JAPAN', 'Bilgi.uz', 
    'IT Bilim akademiyasi', 'Bandlik', 'Hamkorlar'
  ];

  useEffect(() => {
    const updateButtonCount = () => {
      if (window.innerWidth < 900) {
        setVisibleButtonCount(2);
      } else if (window.innerWidth < 1050) {
        setVisibleButtonCount(3);
      } else {
        setVisibleButtonCount(4);
      }
    };

    window.addEventListener('resize', updateButtonCount);
    updateButtonCount();

    return () => {
      window.removeEventListener('resize', updateButtonCount);
    };
  }, []);

  useEffect(() => {
    if (isPlaying && !pauseForButtonClick) {
      intervalRef.current = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 6);
      }, 6000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, pauseForButtonClick]);

  const handleButtonClick = (index) => {
    if (activeButtonRef.current) {
      activeButtonRef.current.blur();
    }
    setImageIndex(index);
    setIsPlaying(false);
    setPauseForButtonClick(true);
    setTimeout(() => {
      setPauseForButtonClick(false);
      setIsPlaying(true);
    }, 5000); // Pause for 5 seconds
  };

  const startIdx = Math.min(
    Math.max(imageIndex - Math.floor(visibleButtonCount / 2), 0),
    buttons.length - visibleButtonCount
  );
  const visibleButtons = buttons.slice(startIdx, startIdx + visibleButtonCount);

  return (
    <div className="Carsuel_box">
           
      <div 
        id="carouselExampleControls" 
        className="carousel slide" 
        data-bs-ride="carousel" 
        data-interval="610"
      >
        <img src={IT_bilim_logo} alt="IT bilim logo" className="Logo" />
        <div className="carousel-inner">
          <Particles_Component />
          <div className={`carousel-item ${imageIndex === 0 ? 'active' : ''}`}>
            <img src={team} alt="Slide 0" />
            <h3 className="Carousel_Img_Text">
              Maqsadli qarz - IT sohasida biznesni rivojlantirish va kengaytirish uchun
            </h3>
          </div>
          <div className={`carousel-item ${imageIndex === 1 ? 'active' : ''}`}>
            <img src={japan} alt="Slide 1" />
            <h3 className="Carousel_Img_Text">
              IT BILIM JAPAN - Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni o'qitish va tayyorlash loyihasi
            </h3>
          </div>
          <div className={`carousel-item ${imageIndex === 2 ? 'active' : ''}`}>
            <img src={bilgi} alt="Slide 2" />
            <h3 className="Carousel_Img_Text">
              Bilgi.Uz - IT kurslarining katta tanlovi uchun qulay to'lov rejasi
            </h3>
          </div>
          <div className={`carousel-item ${imageIndex === 3 ? 'active' : ''}`}>
            <img src={academy} alt="Slide 3" />
            <h3 className="Carousel_Img_Text">
              IT BILIM akademiyasi - innovatsion ta'lim muassasi
            </h3>
          </div>
          <div className={`carousel-item ${imageIndex === 4 ? 'active' : ''}`}>
            <img src={Bandlik} alt="Slide 4" />
            <h3 className="Carousel_Img_Text">
              Bandlik - yosh IT mutaxassislari uchun ijtimoiy amalyot loyihasi
            </h3>
          </div>
          <div className={`carousel-item ${imageIndex === 5 ? 'active' : ''}`}>
            <img src={partnership} alt="Slide 5" />
            <h3 className="Carousel_Img_Text">
              Hamkorlar - Linux Professional Insitute, CompTIA, openEDG, CISCO, Networking Academy
            </h3>
          </div>
        </div>



  
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid p-0 ps-4">
                    <a className="navbar-brand" href="#">
                        {/* <img src="https://it-bilim.uz/themes/assets/images/icons/logo/logo_uz.svg"/> */}
                    </a>
                    <button className="navbar-toggler" style={{outline:"none"}}>
                        <div className="burger"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <div className="w-50"></div>
                            <div className="w-75"></div>
                            <div className="w-25"></div>         
                        </div>
                        
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header d-flex align-items-start p-none">
                                <img src={IT_bilim_logo} alt="Logo" className="canvas_img" />
                                <i className="fa-solid fa-xmark text-white h-auto" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize: "30px"}}></i>
                            </div>
                            <div className="offcanvas-body">
                                <div className="canvas_navs">
                                  <a  aria-current="page" href="#About_us">Biz haqimizda</a>
                                  <a  href="#Projects">Loyhalar </a>
                                  <a  href="#Courses">Kurslar </a>
                                  <a  href="#Partners">Hamkorlar </a>
                                  <a  href="#Contacts">Kontaktlar </a>
                                </div>

                                <div className='h-auto'>
                                    <a href="https://it-bilim.uz/tel:+998993301199" target="_"  className="offcanvas_apply">
                                        <span ><i className="fa-solid fa-phone"></i></span>
                                        +998 (99) 330 11 99
                                    </a>
                                    <a href="mailto:info@it-bilim.uz" target="_" className="offcanvas_apply">
                                        <span><i className="fa-solid fa-envelope"></i></span>
                                        info@it-bilim.uz
                                    </a>

                                    <a href="mailto:info@it-bilim.uz" target="_" className="offcanvas_apply mt-4">
                                        <span><img src="https://it-bilim.uz/themes/assets/images/icons/social/tg.svg" alt="telegram" /></span>
                                        <span><img src="https://it-bilim.uz/themes/assets/images/icons/social/inst.svg" alt="instagram" /></span>
                                        <span><img src="https://it-bilim.uz/themes/assets/images/icons/social/facebook.svg" alt="facebook"/> </span>
                                        <span><img src="https://it-bilim.uz/themes/assets/images/icons/social/youtube.svg" alt="youtube"/></span>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </button>

                        


                    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                        
                      <ul className="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 ">
                            
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#About_us">Biz haqimizda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projects">Loyhalar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#Courses">Kurslar</a>
                            </li>
                            <li className="nav-item">     
                                <a className="nav-link " href="#Partners">Hamkorlar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#Contacts">Kontaktlar</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
                        

            <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
                    <g clipPath="url(#clip0_645_123)">
                        <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_645_123">
                            <rect width="50" height="50" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            
          
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg2">
                    <g clipPath="url(#clip0_645_123)">
                        <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_645_123">
                            <rect width="50" height="50" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg3">
                    <g clipPath="url(#clip0_645_123)">
                        <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_645_123"><rect width="50" height="50" fill="white"></rect></clipPath>
                    </defs>
                </svg>
                
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg4">
                    <g clipPath="url(#clip0_645_123)">
                        <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_645_123"><rect width="50" height="50" fill="white"></rect></clipPath>
                    </defs>
                </svg>


            <div className="button-carousel-container bottom_box">
              {visibleButtons.map((buttonText, index) => (
                <button
                  key={index}
                  type="button"
                  className={` ${imageIndex === (startIdx + index) ? 'active' : ''}`}
                  onClick={() => handleButtonClick(startIdx + index)}
                  ref={imageIndex === (startIdx + index) ? activeButtonRef : null}
                >
                  {buttonText}
                </button>
              ))}
            </div>

      </div>
    </div>
  );
}

export default Introduction;
