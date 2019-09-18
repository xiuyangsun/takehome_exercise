import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import injectSheet from 'react-jss';
import Button from './Button'
import { setIndex } from '../actions';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

class Carousel extends Component {
  render() {

    const { classes: c, gifs, setIndex } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      prevArrow: <Button to="prev" />,
      nextArrow: <Button to="next" />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (newIndex) => {
        setIndex(newIndex);
      },
    };

    const slides = gifs.length !== 0 && gifs.map(gif => (
      <div key={gif.id} className={c.imageContainer}>
        <img
          src={gif.url}
          alt={gif.id}
          className={c.image}
        />
      </div>
    ))
    return (
      <div className={c.sliderContainer}>
        <Slider {...settings}>
          {slides}
        </Slider>
      </div>
    );
  }
}

const styles = {
  sliderContainer: {
    '&> div': {
      display: 'flex',
      alignItems: 'flex-end'
    },
  },
  imageContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    outline: 'none'
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    outline: 'none',
    width: '500px',
    margin: 'auto',
  },
}

export default connect(null, { setIndex })(injectSheet(styles)(Carousel));
