
import Carusel_ads from './Components/Carusel_ads';
import Info_Project from './Components/Info_about_project';
import Introduction from './Components/Introduction';
import './Styles/App.css';
import "./Styles/Slider.css";
import './Styles/Responsive.css';
import SwiperSlider from './Components/Swiper';
import Top_courses from './Components/Top_Courses';
import Data_Numbes from './Components/Data_numbers';
import Partnership from './Components/Partnership';
import IT_Bilim from './Components/@IT_bilim';
import Video_Card from './Components/Video_Card';
import Video_ads from './Components/Video_ads';
import MapComponent from './Components/Map';
import Footer from './Components/Footer';
import ParticlesComponent from './Components/Particles';






function App() {

  return (
    <div className="App">

          
          <Introduction/>
          <Info_Project/>
          <Carusel_ads/>
          <SwiperSlider/>
          <Top_courses/>
          <Data_Numbes/>
          <Partnership/>
          <IT_Bilim/>
          <Video_Card/>
          <Video_ads/>
          <MapComponent/>
          <Footer/>
    </div>
  );
}

export default App;
