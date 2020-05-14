import image1 from "../components/Slider/img/slide2.jpg";
import image2 from "../components/Slider/img/slide1.jpg";
import image3 from "../components/Slider/img/slide3.jpg";
import image4 from "../components/Slider/img/slide4.jpg";
import {
  NEXT_SLIDE,
  PREV_SLIDE,
  //NEW_SLIDES,
  LIKE_TOGGLE_CLASS,
  LIKE_TOGGLE,
} from "./types";

const initialState = {
  slides: [
    { img: image1, likes: "0 likes", counter: 0 },
    { img: image2, likes: "0 likes", counter: 0 },
    { img: image3, likes: "0 likes", counter: 0 },
    { img: image4, likes: "0 likes", counter: 0 },
  ],
  classLike: "slider__heart",
  currentImageIndex: 0,

};

export const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_SLIDE:
      if (state.currentImageIndex < state.slides.length - 1)
        return {
          ...state,
          currentImageIndex: state.currentImageIndex + 1,
        };

      return state;

    case PREV_SLIDE:
      if (state.currentImageIndex > 0)
        return {
          ...state,
          currentImageIndex: state.currentImageIndex - 1,
        };
      return state;

   /*  case NEW_SLIDES:
      return { ...state, slides: action.param }; */

    case LIKE_TOGGLE_CLASS:
      return { ...state, classLike: action.param };

    case LIKE_TOGGLE:
      let slide = { ...state.slides[state.currentImageIndex] };
      const likes = slide.counter + 1;
      let strLikes = likes === 1 ? likes + " like" : likes + " likes";

      const slidesNew = [...state.slides];
      slide.likes = strLikes;
      slide.counter = likes;
      slidesNew[state.currentImageIndex] = slide;
      
      return { ...state, slides:slidesNew };

    default:
      return state;
  }
};
