import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'Home/styles/HomeSlider.scss'

export default class HomeSlider extends Component {
  render() {
    const settings = {
      autoplay: false,
      autoplaySpeed: 4500,
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="home-slider">
        <Slider {...settings}>
          {this.props.slides.map((slide, index) => (
            <a href={slide.link} key={index}>
              <img src={slide.cover} className="item"/>
            </a>
          ))}
        </Slider>
      </div>
      
    );
  }
}