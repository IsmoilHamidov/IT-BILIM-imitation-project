import React from "react";
import About_us from "../Assets/videos/aboutus_uz.mp4"

function Video_ads() {
    return ( 
       <>
                    
                       
        <div className="Carsuel_box">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="1000">
                    <video controls className="media" width="600"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ display: 'block' }}>
                        <source src={About_us} type="video/mp4"/>
                    </video>   
            </div>
        </div>
        </>
     );
}

export default Video_ads;