import React from "react";
import * as Components from "../..";
import * as customHooks from "../../../Hooks";
import { ISlide } from "..";

interface ActionProps {
  slidePos: number;
  slides: ISlide[];
  prevSlide(): void;
  nextSlide(): void;
}

const Action: React.FC<ActionProps> = (props) => {
  const { slidePos, slides, prevSlide, nextSlide } = props;

  const actionBtnMode = customHooks.useMode("action__btn");

  return (
    <div className="slider-default__action">
      <button
        type="button"
        className={`action__btn ${actionBtnMode} ${
          slidePos === 0 ? "action__btn--disabled" : ""
        }`}
        disabled={slidePos === 0}
        onClick={prevSlide}
      >
        <Components.Icons.IconAngleUp className="btn__icon" />
      </button>

      <button
        type="button"
        className={`action__btn ${actionBtnMode} ${
          slidePos === slides.length - 1 ? "action__btn--disabled" : ""
        }`}
        disabled={slidePos === slides.length - 1}
        onClick={nextSlide}
      >
        <Components.Icons.IconAngleDown className="btn__icon" />
      </button>
    </div>
  );
};

export default Action;
