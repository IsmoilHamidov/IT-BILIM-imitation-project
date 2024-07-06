import React from "react";

function Top_courses() {
    return ( 
        <div className="container-fluid Projects_Swiper Top_course" style={{backgroundColor:"#F3F3F3"}}>
             <h2>TOP Kurslar</h2>
             <div className="Courses_card_box">
                <a className="Course_cards" href="https://bilgi.uz/uz/courses/marketing/it-recruitment/">
                    <img src="https://it-bilim.uz/uploads/courses/133e237affa2.png" alt="" />
                    <div className="Line_holder">
                        <div className="first_line_text">
                            <p style={{color:"#7eb649"}}>IT Recruitment</p>
                            <p>HR</p>
                        </div>
                        <p className="grey_text">IT Bilim Academy</p>
                        <div className="second_line_text">
                            <div>
                                <p className="mb-2">Narxi</p>
                                <h5>10 750 000 so’mdan</h5>
                            </div>
                            <div>
                                <p className="mb-2">To'lov narxi</p>
                                <h5>680 556 so’mdan / oyga</h5>
                            </div>
                        </div>
                        <span style={{fontSize:"18px", fontWeight:"600"}}><i class="fa-regular fa-clock me-2" style={{color:"#7eb649", fontSize:"19px"}}></i>3 oy</span>
                    </div>
                </a>
             </div>
        </div>
     );
}

export default Top_courses;