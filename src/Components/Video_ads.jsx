import React, { useState, useEffect } from "react";
import About_us from "../Assets/videos/aboutus_uz.mp4"
import Abour_us_ru from "../Assets/videos/aboutus_ru.mp4"
import { useTranslation } from "react-i18next";

function Video_ads() {

    const [t, i18n] = useTranslation("global");
    const [key, setKey] = useState(0); 
    
    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [i18n.language]);
    
    const Video = i18n.language === "uz" ? About_us : Abour_us_ru;

    return ( 
       <>               
        <div className="Carsuel_box">
            <div id="carouselExampleControls"  
                style={{zIndex:"1"}} 
                className="carousel slide" 
                data-bs-ride="carousel" 
                data-interval="1000"
                key={key} 
             >

                <video controls className="media" width="600"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ display: 'block' }}>
                    <source src={Video} type="video/mp4"/>
                </video>   
            </div>
        </div>
        </>
     );
}

export default Video_ads;