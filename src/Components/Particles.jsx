import React, { useEffect } from "react";
import image1 from "../Assets/40b396321a69.jpg";
import image2 from "../Assets/download.jpg";
import image3 from "../Assets/7ea5fe56831c.jpg";


function Example() {
    useEffect(() => {
        const slider = document.querySelector('.slider');
        const buttons = Array.from(slider.children);
        let cloneCount = buttons.length;

        // Clone buttons to create a seamless slide effect
        buttons.forEach(button => {
            const clone = button.cloneNode(true);
            slider.appendChild(clone);
        });

        // Function to move the slider
        const moveSlider = () => {
            const currentTransform = getComputedStyle(slider).transform;
            const matrix = new DOMMatrix(currentTransform);
            const currentX = matrix.m41;
            const sliderWidth = slider.scrollWidth / 2; // Original buttons width

            if (Math.abs(currentX) >= sliderWidth) {
                slider.style.transform = 'translateX(0)';
            } else {
                slider.style.transform = `translateX(${currentX - 200}px)`; // Move left by 200px (adjust as needed)
            }
        };

        // Get the Bootstrap carousel instance
        const carousel = new window.bootstrap.Carousel('#carouselExample', {
            interval: 5000 // Change the interval as needed
        });

        // Listen for the 'slide.bs.carousel' event to start the button slider
        document.querySelector('#carouselExample').addEventListener('slide.bs.carousel', () => {
            moveSlider();
        });

        // Optional: pause the button slider when hovering over the buttons
        slider.addEventListener('mouseover', () => {
            slider.style.transition = 'none';
        });

        slider.addEventListener('mouseout', () => {
            slider.style.transition = 'transform 1s ease';
        });
    }, []);


    
    return (
        <div className="carousel-container">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} className="d-block w-100 h-50" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100  h-50" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100  h-50" alt="Image 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="bottom_box d-none d-sm-flex">
                <div className="slider">
                    <button id="part">Hamkorlar</button>
                    <button id="team">Bandlik</button>
                    <button id="Bilgi">Bilgi.uz</button>
                    <button id="Japan">IT bilim JAPAN</button>
                </div>
            </div>
        </div>
    );
}

export default Example;
