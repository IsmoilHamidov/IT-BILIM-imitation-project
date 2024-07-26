import React, { useState, useEffect, useRef } from 'react';

// Import local images
import japan from "../Assets/40b396321a69.jpg";
import partnership from "../Assets/download.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import academy from "../Assets/b582c776c9f5.jpg";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [pauseForButtonClick, setPauseForButtonClick] = useState(false);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [deltaX, setDeltaX] = useState(0); // Store the change in position for smooth drag
  const activeButtonRef = useRef(null);

  const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6'];

  useEffect(() => {
    if (isPlaying && !pauseForButtonClick) {
      intervalRef.current = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 5); // 5 is the number of images
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, pauseForButtonClick]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // 5 is the number of images
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % 5); // 5 is the number of images
  };

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
    }, 3000); // Pause for 3 seconds
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setDeltaX(0); // Reset deltaX on new drag start
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (startX !== null) {
      const movement = e.clientX - startX;
      setDeltaX(movement);
      // Adjust the sensitivity of the dragging
      const threshold = 20; // Smaller threshold for even slower movement
      if (Math.abs(movement) > threshold) {
        if (movement > threshold) {
          handleNext();
          setStartX(e.clientX); // Update startX to continue dragging smoothly
        } else if (movement < -threshold) {
          handlePrevious();
          setStartX(e.clientX); // Update startX to continue dragging smoothly
        }
      }
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setStartX(null);
    setDeltaX(0); // Reset deltaX when dragging stops
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX !== null) {
      setCurrentX(e.touches[0].clientX);
      const movement = e.touches[0].clientX - startX;
      const threshold = 50; // Threshold for touch movements
      if (Math.abs(movement) > threshold) {
        if (movement > threshold) {
          handleNext();
          setStartX(e.touches[0].clientX); // Update startX to continue dragging smoothly
        } else if (movement < -threshold) {
          handlePrevious();
          setStartX(e.touches[0].clientX); // Update startX to continue dragging smoothly
        }
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const startIdx = Math.min(Math.max(imageIndex - 1, 0), buttons.length - 3);
  const visibleButtons = buttons.slice(startIdx, startIdx + 3);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${imageIndex === 0 ? 'active' : ''}`}>
            <img src={partnership} alt="Slide 0" />
            <h3 className="Carousel_Img_Text">Hamkorlar - Linux Professional Insitute, CompTIA, openEDG, CISCO, Networking Academy</h3>
          </div>
          <div className={`carousel-item ${imageIndex === 1 ? 'active' : ''}`}>
            <img src={japan} alt="Slide 1" />
            <h3 className="Carousel_Img_Text">IT BILIM JAPAN - Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni o'qitish va tayyorlash loyihasi</h3>
          </div>
          <div className={`carousel-item ${imageIndex === 2 ? 'active' : ''}`}>
            <img src={team} alt="Slide 2" />
            <h3 className="Carousel_Img_Text">Maqsadli qarz - IT sohasida biznesni rivojlantirish va kengaytirish uchun</h3>
          </div>
          <div className={`carousel-item ${imageIndex === 3 ? 'active' : ''}`}>
            <img src={bilgi} alt="Slide 3" />
            <h3 className="Carousel_Img_Text">Bilgi.Uz - IT kurslarining katta tanlovi uchun qulay to'lov rejasi</h3>
          </div>
          <div className={`carousel-item ${imageIndex === 4 ? 'active' : ''}`}>
            <img src={academy} alt="Slide 4" />
            <h3 className="Carousel_Img_Text">IT BILIM akademiyasi - innovatsion ta'lim muassasi</h3>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" onClick={handlePrevious}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="button-carousel-container">
        <div className="button-carousel">
          {visibleButtons.map((text, idx) => {
            const realIdx = startIdx + idx;
            return (
              <button
                key={realIdx}
                ref={realIdx === imageIndex ? activeButtonRef : null}
                className={`btn btn-secondary ${realIdx === imageIndex ? 'active' : ''}`}
                onClick={() => handleButtonClick(realIdx)}
              >
                {text}
              </button>
            );
          })}
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
    </div>



  );
  <div className="button-carousel-container bottom_box">
  {visibleButtons.map((text, idx) => {
    const realIdx = startIdx + idx;
    return (
      <button
        key={realIdx}
        className={` ${realIdx === imageIndex ? 'active' : ''}`}
        onClick={() => handleButtonClick(realIdx)}           
      >
        {text}
      </button>
    );
  })}
</div>


};

export default Carousel;
