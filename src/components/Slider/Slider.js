import React from "react";
//import ReactDOM from "react-dom";
import "./slider.sass";
import prev from "./img/prev.png";
import next from "./img/next.png";
import Slide from "./Slide";
import { connect, useDispatch } from "react-redux";
import {
  nextSlide1,
  prevSlide1,
  likeToggleClass,
  likeToggleClassHidden,
  likeToggle,
} from "../../redux/actions";

const likeClassShow = "slider__heart slider__animate-heart";
const likeClassHidden = "slider__heart";

const Slider = ({ slides1, classLike1, currentImageIndex }) => {
  const dispatch = useDispatch();
  const likeToggleAll = () => {
    dispatch(likeToggle());
    dispatch(likeToggleClass(likeClassShow));
    dispatch(likeToggleClassHidden(likeClassHidden));
  };

  return (
    <div className="slider__container">
      <div>
        <button
          className="slider__btn-prev"
          onClick={() => dispatch(prevSlide1())}
        >
          <img className="prev__img" src={prev} alt="Привет" />
        </button>
      </div>
      <Slide
        slide={slides1[currentImageIndex]}
        likeToggle={likeToggleAll}
        classLike={classLike1}
      />
      <div>
        <button
          className="slider__btn-next"
          data-direction="next"
          onClick={() => dispatch(nextSlide1())}
        >
          <img className="next__img" src={next} alt="Привет" />
        </button>
      </div>
      <div className="slider__pagination">
        {currentImageIndex + 1} / {slides1.length}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slides1: state.sliders.slides,
    classLike1: state.sliders.classLike,
    currentImageIndex: state.sliders.currentImageIndex,
  };
};

const mapDispatchToProps = {
  nextSlide1,
  prevSlide1,
  likeToggleClass,
  likeToggleClassHidden,
  likeToggle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
