
import Carusel_ads from './Components/Carusel_ads';
import Info_Project from './Components/Info_about_project';
import Introduction from './Components/Introduction';
import './Styles/App.css';
import "./Styles/Slider.css";
import SwiperSlider from './Components/Swiper';
import Top_courses from './Components/Top_Courses';
import Data_Numbes from './Components/Data_numbers';
import Partnership from './Components/Partnership';
import IT_Bilim from './Components/@IT_bilim';
import Video_Card from './Components/Video_Card';




function App() {

  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline text-red-600">
          <Introduction/>
          <Info_Project/>
          <Carusel_ads/>
          <SwiperSlider/>
          <Top_courses/>
          <Data_Numbes/>
          <Partnership/>
          <IT_Bilim/>
          <Video_Card/>
        </h1>
    </div>
  );
}

export default App;
