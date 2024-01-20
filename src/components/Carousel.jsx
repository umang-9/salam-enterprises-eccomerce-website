import {useState} from 'react'
import { Link } from "react-router-dom";

import Slider from 'react-slick'
import {IconArrowLeft, IconArrowRight, IconArrowNarrowDown} from '@tabler/icons-react'

import banner1 from '../img/banner/banner3.jpg';
import banner2 from '../img/banner/banner4.jpg';
import banner3 from '../img/banner/banner5.jpg';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./Carousel.css";

function Carousel() {

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }

  const sliderCards = [
    {
      imageSrc: banner1,
      title: 'CONSTRUCTION & FIT-OUT',
      description: 'Fit out Works for Harvey Nichols Store at Doha Festival City, for a Total Area of 10,000 SQM',
    },
    {
      imageSrc: banner2,
      title: 'FITOUT & FURNITURE',
      description: 'Design Build Scope of Fit out and Furniture for West Bay Medical Center fit out works at The Gate Ma...',
    },
    {
      imageSrc: banner3,
      title: 'FIT OUT WORKS',
      description: 'Fit out Works for Al Fardan Medical with North Western Medicine @ Burj Al Fardan at Lusail....',
    },
  ]

  return (
    <section class="banner-sec">
        <div class="banner-wrap">

            <Slider {...sliderSettings}>
                {sliderCards.map((card, index) => (
                    // <div key={index} class="bg_img" style={background: url(${card.imageSrc}) }>
                    <div key={index} className="bg_img" style={{backgroundImage: `url(${card.imageSrc})` }}>
                      <img src={card.imageSrc} />
                      <div class="overlay"></div>
                      <div class="container">
                          <div class="banner-caption">
                            <h2>{card.title}</h2>
                            <div class="banner-caption-bottom">
                                <p>{card.description}</p>
                                <h3><a href="#!">click to discover</a></h3>
                            </div>
                          </div>
                      </div>
                    </div>
                ))}
            </Slider>

            <div class="banner-bottom-part">
                <div class="container">
                    <div class="slider-count"></div>
                    <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                      <span class="slider__label sr-only"></span>
                    </div>
                    <div class="scroll_down">
                        <a href="#latestNewsSection">LEARN MORE <IconArrowNarrowDown /></a>
                    </div>
                </div>
            </div>

      </div>
    </section>
  );
}

export default Carousel;