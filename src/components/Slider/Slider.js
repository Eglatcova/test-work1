import React from "react";
//import ReactDOM from "react-dom";
import "./slider.sass";
import image1 from "./img/slide2.jpg";
import image2 from "./img/slide1.jpg";
import image3 from "./img/slide3.jpg";
import image4 from "./img/slide4.jpg";
import prev from "./img/prev.png";
import next from "./img/next.png";
import Slide from "./Slide";

class Slider extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      slides: [
        {img: image1, likes: "0 likes", counter: 0},
        {img: image2, likes: "0 likes", counter: 0},
        {img: image3, likes: "0 likes", counter: 0},
        {img: image4, likes: "0 likes", counter: 0},
      ],
      currentImageIndex: 0,
      isCycleMode: false,
      classLike: "slider__heart",
    };
  }

  leafingThroughSlideHandler = (e) => {
    let newIndex = this.state.currentImageIndex;
    
    const nextSlide = () => {
      if (newIndex < this.state.slides.length - 1) {
        newIndex++;
      }
    }

    const prevSlide = () => {
      if (newIndex > 0) {
        newIndex--;
      }
    }

    if (e.currentTarget.dataset.direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
    this.setState({ currentImageIndex: newIndex });

  }

  likeToggle = () => {
    const slideIndex = this.state.currentImageIndex;
    let slide = {...this.state.slides[slideIndex]};
    const likes = slide.counter + 1;
    const likeClass = "slider__heart slider__animate-heart";

    let strLikes = (likes === 1) ? likes + " like" : likes + " likes";

    const slides = [ ...this.state.slides ];
    slide.likes = strLikes;
    slide.counter = likes;
    slides[slideIndex] = slide;

    setTimeout(() => {
      const likeClass = "slider__heart";
      this.setState({
        classLike: likeClass
      });
    }, 1000);

    this.setState({
      slides: slides,
      currentIndex: slideIndex,
      classLike: likeClass
    });
  }

  render() {
    return (
      <div className="slider__container">
        <div>
          <button
            className="slider__btn-prev"
            data-direction="prev"
            onClick={this.leafingThroughSlideHandler}
          >
            <img className="prev__img" src={prev} alt="Привет"/>
          </button>
        </div>
        <Slide
          slide={this.state.slides[this.state.currentImageIndex]}
          likeToggle={this.likeToggle}
          classLike={this.state.classLike}
        />
        <div>
          <button
            className="slider__btn-next"
            data-direction="next"
            onClick={this.leafingThroughSlideHandler}
          >
            <img className="next__img" src={next} alt="Привет"/>
          </button>
        </div>
        <div className="slider__pagination">
          {this.state.currentImageIndex + 1} / {this.state.slides.length}
        </div>
      </div>
    );
  }
}



export default Slider;
