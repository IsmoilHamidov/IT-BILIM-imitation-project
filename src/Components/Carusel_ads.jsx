import React from "react";
import ThisVideo from "../Assets/videos/IT-Bilim Project.mp4"

function Carusel_ads() {
    return ( 
       <>
                    
                       
        <div className="Carsuel_box">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="1000">


                    <video controls className="media" width="600"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ display: 'block' }}>
                        <source src={ThisVideo} type="video/mp4"/>
                    </video>
                    
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg d-none d-md-block">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123">
                                <rect width="50" height="50" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    
              
                    <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg2 d-none d-md-block">
                        <g clip-path="url(#clip0_645_123)">
                            <path d="M50 0H0C38.8 1.2 49.5 33.8333 50 50V0Z" fill="white"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_645_123">
                                <rect width="50" height="50" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>        
           
           

              
                <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-md-flex">
                    <div class="container-fluid p-0 ps-4">
                        <a class="navbar-brand" href="#">
                            {/* <img src="https://it-bilim.uz/themes/assets/images/icons/logo/logo_uz.svg"/> */}
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">

                            <ul class="navbar-nav navbar-right ms-auto mb-2 mb-lg-0 ">
                                
                            </ul>
                        </div>
                    </div>

                </nav>

                
            </div>
        </div>
        </>
     );
}

export default Carusel_ads;