import React from 'react'
import Slider from "react-slick"

import Photoshop from '../images/photoshop-logo.png'
import Illustrator from '../images/illustrator-logo.png'
import AfterEffects from '../images/after-effects-logo.png'
import Lightroom from '../images/lightroom-logo.png'
import Sony from '../images/sony-logo.jpg'

import './stack.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesPerRow: 4,
    responsive: [
        {
            breakpoint: 834,
            settings: {
                slidesPerRow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesPerRow: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesPerRow: 1
            }
        }
    ]
}

const Stack = () => {
    return (
        <div className="outer-container stack">
            <div className="container">
                <div className="center-container">
                    <h2 className="sub-heading">Equipment and Technologies used</h2>
                    <hr className="divider"/>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={Photoshop} alt="Photoshop logo"/>
                    </div>
                    <div>
                        <img src={AfterEffects} alt="AfterEffect logo"/>
                    </div>
                    <div>
                        <img src={Lightroom} alt="Lightroom logo"/>
                    </div>
                    <div>
                        <img src={Illustrator} alt="Illustrator logo"/>
                    </div>
                    <div>
                        <img src={Sony} alt="Sony logo"/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Stack