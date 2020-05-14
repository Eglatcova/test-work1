import {
  NEXT_SLIDE,
  PREV_SLIDE,
 // NEW_SLIDES,
  LIKE_TOGGLE_CLASS,
  LIKE_TOGGLE,
} from "./types";

export function nextSlide1() {
  return {
    type: NEXT_SLIDE,
  };
}

export function prevSlide1() {
  return {
    type: PREV_SLIDE,
  };
}

/* export function newSlides(newSlides) {
  return {
    type: NEW_SLIDES,
    param: newSlides,
  };
} */

export function likeToggleClass(newClass) {
  return {
    type: LIKE_TOGGLE_CLASS,
    param: newClass,
  };
}

export function likeToggleClassHidden(newClass) {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(likeToggleClass(newClass));
    }, 1000);
  };
}

export function likeToggle() {
  return {
    type: LIKE_TOGGLE,
  };
}
