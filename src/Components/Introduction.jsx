import React from "react";
import japan from "../Assets/40b396321a69.jpg"
import partnership from "../Assets/download.jpg"
import team from "../Assets/7ea5fe56831c.jpg"
import It_bilim from "../Assets/b6d6df6722ad.png"
import IT_bilim_logo from "../Assets/logo1_uz.svg"




function Introduction() {



    return ( 
        <div className="Carsuel_box">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="650">
                <img src={IT_bilim_logo} alt="IT bilim logo" className="Logo" />
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={partnership}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={japan} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={team}  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={It_bilim}  alt="..."/>
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
           

              
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid p-0 ps-4">
                        <a class="navbar-brand" href="#">
                            {/* <img src="https://it-bilim.uz/themes/assets/images/icons/logo/logo_uz.svg"/> */}
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">

                            <ul class="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 ">
                                
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Biz haqimizda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navItem_Link" href="#">Loyhalar </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navItem_Link" href="#">Kurslar </a>
                                </li>
                                <li class="nav-item">     
                                    <a class="nav-link navItem_Link" href="#">Hamkorlar </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navItem_Link" href="#">Kontaktlar </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </nav>


                <div className="bottom_box">
                    <button>Maqsadli qarz</button>
                    <button>Hamkorlar</button>
                    <button>Bilgi.uz</button>
                    <button>IT bilim JAPAN</button>
                </div>

                
            </div>
        </div>
     );
}

export default Introduction;