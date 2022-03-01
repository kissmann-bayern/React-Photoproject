import Navbar from "./Navbar";
import DarkModeToggle from "./ToggleDarkMode"
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import ImageSlider  from './Media/ImageSlider'
const images = [
'https://backend.photoproject-rm.de/uploads/header/2.jpg',
  'https://backend.photoproject-rm.de/uploads/header/3.jpg',
  'https://backend.photoproject-rm.de/uploads/header/2.jpg',
  'https://backend.photoproject-rm.de/uploads/header/4.jpg',
];
const App = () => {
  return (
    <header>
      <div  className="nav-area">
        <a href="/#" className="logo">
          Logo
        </a>
        <Navbar  />
        <DarkModeToggle  />
        <ImageSlider />
      </div>
    </header>
  );
};

export default App;
