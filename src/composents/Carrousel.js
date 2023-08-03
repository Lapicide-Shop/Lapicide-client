import {  useState } from "react"
import image1 from '../assets/lapicide.png'
import image2 from '../assets/lapicide2.png'
import image3 from '../assets/lapicide3.png'
import image4 from '../assets/lapicide4.png'
import image5 from '../assets/lapicide5.png'
import image6 from '../assets/lapicide6.png'
import image7 from '../assets/lapicide7.png'
import image8 from '../assets/lapicide8.png'
import image9 from '../assets/lapicide9.png'
import image10 from '../assets/lapicide10.png'
import "../composents/Carrousel.css"

const Carrousel = () => {

    const images = [
        image1,image2, image3, image4, image5, image6, image7, image8, image9, image10 
    ]
      
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex +1 ));
    };



    return(
        <div className="carrousel-div">
            <div className="carrousel">
                <img className="carrousel-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex +1}`} /> 
            </div>
            <div className="carrousel-btn">
                <a onClick={prevImage}>PREVIOUS</a>
                <p>{currentImageIndex +1}/10</p>
                <a  onClick={nextImage}>NEXT</a>
            </div>
            <hr/>
        </div>
    )
    
}

export default Carrousel