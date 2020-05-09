import React from "react";
//import ReactDOM from "react-dom";
import "./slider.sass";
import image1 from "./img/slide2.jpg";
import image2 from "./img/slide1.jpg";
import image3 from "./img/slide3.jpg";
import image4 from "./img/slide4.jpg";
import prev from "./img/prev.png";
import next from "./img/next.png";
import heart from "./img/heart.png";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [image1, image2, image3, image4],
      currentImageIndex: 0,
      isCycleMode: false,
      likes: ["0 likes", "0 likes", "0 likes", "0 likes"],
      heartImg: heart,
      counter: [0, 0, 0, 0],
      classLike: "slider__heart",
    };
    this.nextSlideHandler = this.nextSlideHandler.bind(this);
    this.likeToggle = this.likeToggle.bind(this);
  }

  nextSlideHandler(e) {
    let newIndex = this.state.currentImageIndex;
    let newClass = this.state.classLike;
    if (e.currentTarget.dataset.direction === "next") {
      if (newIndex < this.state.images.length - 1) {
        newIndex++;
      }
    } else {
      if (newIndex > 0) {
        newIndex--;
      }
    }

    this.setState({ currentImageIndex: newIndex });
    this.setState({ classLike: newClass });
  }

  likeToggle() {

    this.state.counter[this.state.currentImageIndex]++;
    if (this.state.counter[this.state.currentImageIndex] === 1)
      this.state.likes[this.state.currentImageIndex] =
        this.state.counter[this.state.currentImageIndex] + " like";
    else
      this.state.likes[this.state.currentImageIndex] =
        this.state.counter[this.state.currentImageIndex] + " likes";

    this.state.classLike = "slider__heart slider__animate-heart";
    setTimeout(() => {
      this.state.classLike = "slider__heart";
      this.setState({});
    }, 1000);

    this.setState({});
  }

  render() {
    return (
      <div className="slider__container">
        <div>
          <button
            className="slider__btn-prev"
            data-direction="prev"
            onClick={this.nextSlideHandler}
          >
            <img className="prev__img" src={prev} />
          </button>
        </div>
        <div className="slider__post">
          <img className={this.state.classLike} src={this.state.heartImg} />
          <img
            className="slider__img"
            src={this.state.images[this.state.currentImageIndex]}
            onDoubleClick={this.likeToggle}
          />
          <p className="slider__likes">
            {this.state.likes[this.state.currentImageIndex]}
          </p>
        </div>
        <div>
          <button
            className="slider__btn-next"
            data-direction="next"
            onClick={this.nextSlideHandler}
          >
            <img className="next__img" src={next} />
          </button>
        </div>
        <div className="slider__pagination">
          {this.state.currentImageIndex + 1} / {this.state.images.length}
        </div>
      </div>
    );
  }
}

/*
class ButtonPrev extends React.Component {
  render() {
    return (
      <div className="slider__btn-prev">
        <button data-direction="prev" onClick={this.nextSlideHandler}>
          Prev
        </button>
      </div>
    );
  }
}

class ButtonNext extends React.Component {
  render() {
    return (
      <div className="slider__btn-next">
        <button data-direction="next" onClick={this.nextSlideHandler}>
          Next
        </button>
      </div>
    );
  }
}

 class Pagination extends React.Component {
  render() {
    return <div></div>;
  }
}

class Img extends React.Component {
  render() {
    return <div></div>;
  }
}
 */

export default Slider;
