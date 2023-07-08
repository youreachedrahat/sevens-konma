import React, { useState } from 'react';
import "./Carousel.css"
const Slide = ({ slide, current, handleSlideClick }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    const el = event.target;
    const r = el.getBoundingClientRect();

    setX(event.clientX - (r.left + Math.floor(r.width / 2)));
    setY(event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    setX(0);
    setY(0);
  };

  const handleImageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  let classNames = 'slide';

  if (current === slide.index) classNames += ' slide--current';
  else if (current - 1 === slide.index) classNames += ' slide--previous';
  else if (current + 1 === slide.index) classNames += ' slide--next';

  return (
    <li
      className={classNames}
      onClick={() => handleSlideClick(slide.index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
       

      <article className="slide__content">
      {slide.src? 
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={slide.headline}
          src={slide.src}
        //   onLoad={handleImageLoaded}
        //   style={{ '--x': `${x}px`, '--y': `${y}px` }}
        />
      </div> :<></>}
        <h2 className="slide__headline">{slide.headline}</h2>
        <p className="slide__action">{slide.para}</p>
      </article>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

const Slider = ({ slides, heading }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>

        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="slider__controls">
        {/* <SliderControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        /> */}

        <SliderControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
};



export default Slider;
// export default function App() {
// }
