import { React, useState } from "react"
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
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import  {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

const Carrousel = () => {

    const images = [
        image1,image2, image3, image4, image5, image6, image7, image8, image9, image10 
    ]
      
    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    {/*const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length -1 ? 0 : prevIndex +1 ));
    };*/}
   

    return(
        // <div className="carrousel-div">
        //     <div className="carrousel">   
        //     <img className="carrousel-image" src={images[currentImageIndex]} alt={`Image ${currentImageIndex +1}`}/> 
                
        //     </div>
        //     <div className="carrousel-btn">
        //         <a onClick={prevImage}>PREVIOUS</a>
        //         <p>{currentImageIndex +1}/10</p>
        //         <a  onClick={nextImage}>NEXT</a>
        //     </div>
        //     <hr/>
        // </div>
        <div className="carrousel-div">
                  <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={0}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        pagination={{
                            type: 'fraction',
                            formatFractionCurrent: function (number) {
                            if(number === 10){
                                return 10;
                            }else{
                            return '0' + number;
                            }}
                        }}
                        onSlideChange={(swiper) => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        
                    >
                    {images.map((image) => (
                        
                            <SwiperSlide>
                                <img className="carrousel-image" src={image} alt="image-caroussel"/>
                            </SwiperSlide>
                        
                    ))}          

                </Swiper>
                <div className="carrousel-btn">
                        <a className="swiper-button-prev">PREVIOUS</a>
                        <div className="swiper-pagination"></div>
                        <a className="swiper-button-next">NEXT</a>
                </div>
        </div>
        )
    
}

export default Carrousel