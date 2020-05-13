import React, { useState } from "react";
//import ReactDOM from "react-dom";
import "./slider.sass";
import image1 from "./img/slide2.jpg";
import image2 from "./img/slide1.jpg";
import image3 from "./img/slide3.jpg";
import image4 from "./img/slide4.jpg";
import prev from "./img/prev.png";
import next from "./img/next.png";
import Slide from "./Slide";



const Slider = () => {
  const [slides, setSlides] = useState([
    { img: image1, likes: "0 likes", counter: 0 },
    { img: image2, likes: "0 likes", counter: 0 },
    { img: image3, likes: "0 likes", counter: 0 },
    { img: image4, likes: "0 likes", counter: 0 },
  ]);

  const [classLike, setClassLike] = useState("slider__heart");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextSlide = () => {
    let newIndex = currentImageIndex;
    if (newIndex < slides.length - 1) {
      newIndex++;
    }
    setCurrentImageIndex(newIndex);
  };
  const prevSlide = () => {
    let newIndex = currentImageIndex;
    if (newIndex > 0) {
      newIndex--;
    }
    setCurrentImageIndex(newIndex);
  };

  const likeToggle = () => {
    const slideIndex = currentImageIndex;
    let slide = { ...slides[slideIndex] };
    const likes = slide.counter + 1;
    const likeClassShow = "slider__heart slider__animate-heart";
    const likeClassHidden = "slider__heart";

    let strLikes = likes === 1 ? likes + " like" : likes + " likes";

    const slidesNew = [...slides];
    slide.likes = strLikes;
    slide.counter = likes;
    slidesNew[slideIndex] = slide;

    setTimeout(() => {
      setClassLike(likeClassHidden);
    }, 1000);

    setSlides(slidesNew);
    setClassLike(likeClassShow);
  };

  return (
    <div className="slider__container">
      <div>
        <button className="slider__btn-prev" onClick={() => prevSlide()}>
          <img className="prev__img" src={prev} alt="Привет" />
        </button>
      </div>
      <Slide
        slide={slides[currentImageIndex]}
        likeToggle={likeToggle}
        classLike={classLike}
      />
      <div>
        <button
          className="slider__btn-next"
          data-direction="next"
          onClick={() => nextSlide()}
        >
          <img className="next__img" src={next} alt="Привет" />
        </button>
      </div>
      <div className="slider__pagination">
        {currentImageIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Slider;
