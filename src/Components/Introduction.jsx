import React, { useEffect } from "react";
import japan from "../Assets/40b396321a69.jpg"
import partnership from "../Assets/download.jpg"
import team from "../Assets/7ea5fe56831c.jpg"
// import It_bilim from "../Assets/b6d6df6722ad.png"
import bilgi from "../Assets/bilgi_img.jpg"
import IT_bilim_logo from "../Assets/logo1_uz.svg";
import Particles_Component from "./Particles";






function Introduction() {



    return ( 
        <div className="Carsuel_box">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="605">
                <img src={IT_bilim_logo} alt="IT bilim logo" className="Logo" />
                <div class="carousel-inner">
                    <Particles_Component/>
                    <div class="carousel-item active">
                        <img src={partnership}  alt="partnership"/>
                        <h3 className="Carousel_Img_Text">Hamkorlar - Linux Professional Insitute, CompTIA, openEDG, CISCO, Networking Academy</h3>
                    </div>
                    <div class="carousel-item">
                        <img src={japan} alt="japan"/>
                        <h3 className="Carousel_Img_Text">IT BILIM JAPAN - Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni o'qitish va tayyorlash loyihasi</h3>
                    </div>
                    <div class="carousel-item">
                        <img src={team}  alt="team"/>
                        <h3 className="Carousel_Img_Text">Maqsadli qarz - IT sohasida biznesni rivojlantirish va kengaytirish uchun</h3>
                    </div>
                    <div class="carousel-item">
                        <img src={bilgi}  alt="bilgi"/>
                        <h3 className="Carousel_Img_Text">Bilgi.Uz - IT kurslarining katta tanlovi uchun qulay to'lov rejasi</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123">
                                <rect width="50" height="50" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                
              
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg2">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123">
                                <rect width="50" height="50" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg3">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123"><rect width="50" height="50" fill="white"></rect></clipPath>
                        </defs>
                    </svg>
                    
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg4">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123"><rect width="50" height="50" fill="white"></rect></clipPath>
                        </defs>
                    </svg>
                    
                </div>
           
                <nav class="navbar navbar-expand-xl navbar-light bg-light">
                    <div class="container-fluid p-0 ps-4">
                        <a class="navbar-brand" href="#">
                            {/* <img src="https://it-bilim.uz/themes/assets/images/icons/logo/logo_uz.svg"/> */}
                        </a>
                        <button class="navbar-toggler" style={{outline:"none"}}>
                            <div class="burger"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <div className="w-50"></div>
                                <div className="w-75"></div>
                                <div className="w-25"></div>         
                            </div>
                            
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header d-flex align-items-start">
                                    <img src={IT_bilim_logo} alt="" className="canvas_img" />
                                    <i class="fa-solid fa-xmark text-white h-auto" data-bs-dismiss="offcanvas" aria-label="Close" style={{fontSize: "30px"}}></i>
                                </div>
                                <div class="offcanvas-body">
                                   <div className="canvas_navs">
                                    <a  aria-current="page" href="#About_us">Biz haqimizda</a>
                                    <a  href="#Projects">Loyhalar </a>
                                    <a  href="#Courses">Kurslar </a>
                                    <a  href="#Partners">Hamkorlar </a>
                                    <a  href="#Contacts">Kontaktlar </a>
                                   </div>

                                   <a href="https://it-bilim.uz/tel:+998993301199" target="_"  className="offcanvas_apply">
                                        <span ><i class="fa-solid fa-phone"></i></span>
                                        +998 (99) 330 11 99
                                   </a>
                                   <a href="mailto:info@it-bilim.uz" target="_" className="offcanvas_apply">
                                        <span><i class="fa-solid fa-envelope"></i></span>
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
                        </button>

                           


                        <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">

                            <ul class="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 ">
                                
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#About_us">Biz haqimizda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#Projects">Loyhalar </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#Courses">Kurslar </a>
                                </li>
                                <li class="nav-item">     
                                    <a class="nav-link " href="#Partners">Hamkorlar </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#Contacts">Kontaktlar </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </nav>
              
         
                <div className="bottom_box d-none d-sm-flex">
                    <button id="part">Hamkorlar</button>
                    <button id="team">Bandlik</button>
                    <button id="Bilgi">Bilgi.uz</button>
                    <button id="Japan">IT bilim JAPAN</button>
                </div>
            </div>

        </div>
     );
}

export default Introduction;