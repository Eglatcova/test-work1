import React from "react";
import "./slider.sass";
import heart from "./img/heart.png";

/**
 * Компонент одного элемента слайдера
 * 
 * @param slide (информация о слайде) нпгпнгнгее 
 * @param likeToggle (функция для лайка)
 * @param classLike (класс для появляющегося лайка)
 */

const Slide = ({slide, likeToggle, classLike}) => {
  return(
    <div className="slider__post">
      <img className={classLike} src={heart} alt="img"/>
      <img
        className="slider__img"
        src={slide.img}
        onDoubleClick={e => likeToggle(e)}
        alt="img"
      />
      <p className="slider__likes">
        {slide.likes}
      </p>
    </div>
  )
}

export default Slide;
