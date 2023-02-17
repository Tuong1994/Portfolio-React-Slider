import React from "react";
import * as Components from "../..";
import * as Responsive from "../../../Responsive";
import * as customHooks from "../../../Hooks";
import { ISlide } from "..";
import Header from "./Header";
import SideBar from "./SideBar";
import Action from "./Action";
import Container from "./Container";

interface SliderDefaultProps {
  slideId?: string;
  infinite?: boolean;
  slides?: ISlide[];
}

const heightSpan = 100;

const SliderDefault: React.FC<SliderDefaultProps> = (props) => {
  const { slideId, slides, infinite } = props;

  const list: ISlide[] = [
    { icon: <Components.Icons.IconHouse />, content: "Slide 1" },
    { icon: <Components.Icons.IconHouse />, content: "Slide 2" },
    { icon: <Components.Icons.IconHouse />, content: "Slide 3" },
  ];

  const sliderContainerMode = customHooks.useMode("slider-default__container");
  const menuActiveTheme = customHooks.useTheme("wrapper__item--active");

  const [slideList, setSlideList] = React.useState<ISlide[]>(list);

  const [isShrink, setIsShrink] = React.useState<boolean>(false);
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const [slidePos, setSlidePos] = React.useState<number>(0);

  const [touchStartPos, setTouchStartPos] = React.useState<number>(0);
  const [touchEndPos, setTouchEndPos] = React.useState<number>(0);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);
  const [isTouchSwipped, setIsTouchSwipped] = React.useState<boolean>(false);

  const [mouseStartPos, setMouseStartPos] = React.useState<number>(0);
  const [mouseEndPos, setMouseEndPos] = React.useState<number>(0);
  const [isClicked, setIsClicked] = React.useState<boolean>(false);
  const [isMouseSwipped, setIsMouseSwipped] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (slides && slides.length) setSlideList(slides);
  }, [slides]);

  const renderSlides = () => {
    return slideList.map((s, i) => (
      <div
        key={i}
        className="slider__item"
        id={slideId ? `${slideId}-${i}` : `slide-${i}`}
      >
        {s.content}
      </div>
    ));
  };

  const renderMenu = (showText: boolean) => {
    return slideList.map((s, i) => (
      <div
        key={i}
        className={`wrapper__item ${
          slidePos === i ? `wrapper__item--active ${menuActiveTheme}` : ""
        }`}
        id={slideId ? `${slideId}-${i}` : `slide-${i}`}
        onClick={() => jumpToSlide(i)}
      >
        <span className="item__icon">{s.icon}</span>
        {showText && <span className="item__text">{s.menuName}</span>}
      </div>
    ));
  };

  const translateFullPage = (pos: number) => {
    const translate = -heightSpan * pos;
    for (let i = 0; i < slideList.length; i++) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) el.style.transform = `translateY(${translate}%)`;
    }
  };

  const translatePartialSlide = (pos: number) => {
    const currentPos = -slidePos * heightSpan;
    const translate = currentPos + pos;
    for (let i = 0; i < slideList.length; i++) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) el.style.transform = `translateY(${translate}%)`;
    }
  };

  const handlePrevSlide = () => {
    let newPos = slidePos;
    if (newPos > 0) newPos = newPos - 1;
    else if (infinite) newPos = slideList.length - 1;
    translateFullPage(newPos);
    setSlidePos(newPos);
  };

  const handleNextSlide = () => {
    let newPos = slidePos;
    if (newPos < slideList.length - 1) newPos = newPos + 1;
    else if (infinite) newPos = 0;
    translateFullPage(newPos);
    setSlidePos(newPos);
  };

  const jumpToSlide = (pos: number) => {
    translateFullPage(pos);
    setSlidePos(pos);
  };

  const speedAnimation = (type: string) => {
    for (
      let i = Math.max(0, slidePos - 2);
      i < Math.min(slideList.length, slidePos + 3);
      i++
    ) {
      const el = document.getElementById(
        slideId ? `${slideId}-${i}` : `slide-${i}`
      );
      if (el) {
        if (type === "fast") el.classList.add("slider__item--fast");
        else if (type === "slow") el.classList.remove("slider__item--fast");
      }
    }
  };

  const prevSlide = () => {
    handlePrevSlide();
  };

  const nextSlide = () => {
    handleNextSlide();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    speedAnimation("fast");
    setTouchStartPos(e.targetTouches[0].clientY);
    setTouchEndPos(e.targetTouches[0].clientY);
    setIsTouched(true);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndPos(e.targetTouches[0].clientY);
    const containerHeight =
      document.getElementById("sliderContainer")?.offsetHeight;
    if (containerHeight) {
      if (isTouched) {
        const pos =
          ((touchEndPos - touchStartPos) / containerHeight) * heightSpan;
        translatePartialSlide(pos);
        setIsTouchSwipped(true);
      }
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isTouchSwipped) {
      speedAnimation("slow");
      if (touchEndPos - touchStartPos > 75) handlePrevSlide();
      else if (touchEndPos - touchStartPos < -75) handleNextSlide();
      else jumpToSlide(slidePos);
    }
    setIsTouched(false);
    setIsTouchSwipped(false);
  };

  const onMouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    speedAnimation("fast");
    setMouseStartPos(e.clientY);
    setMouseEndPos(e.clientY);
    setIsClicked(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const containerHeight =
      document.getElementById("sliderContainer")?.offsetHeight;
    if (containerHeight) {
      if (isClicked) {
        setMouseEndPos(e.clientY);
        const pos =
          ((mouseEndPos - mouseStartPos) / containerHeight) * heightSpan;
        translatePartialSlide(pos);
        setIsMouseSwipped(true);
      }
    }
  };

  const onMouseEnd = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseSwipped) {
      speedAnimation("slow");
      if (mouseEndPos - mouseStartPos > 100) handlePrevSlide();
      else if (mouseEndPos - mouseStartPos < -100) handleNextSlide();
      else jumpToSlide(slidePos);
    }
    setIsClicked(false);
    setIsMouseSwipped(false);
  };

  return (
    <div className="slider-default">
      {/* SLIDE CONTAINER */}
      <div
        className={`slider-default__container ${
          isShrink ? "slider-default__container--shrink" : ""
        } ${sliderContainerMode}`}
      >
        <Header setIsShow={setIsShow} />

        <Container
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseStart={onMouseStart}
          onMouseMove={onMouseMove}
          onMouseEnd={onMouseEnd}
          renderSlides={renderSlides}
        />
      </div>
      {/* SLIDE CONTAINER */}

      {/* SLIDE MENU */}
      <SideBar
        isShrink={isShrink}
        setIsShrink={setIsShrink}
        renderMenu={renderMenu}
      />
      <Responsive.SliderMenu
        isShow={isShow}
        setIsShow={setIsShow}
        renderMenu={renderMenu}
      />
      {/* SLIDE MENU */}

      {/* CHANGE SLIDE BUTTON */}
      <Action
        slidePos={slidePos}
        slides={slideList}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      {/* CHANGE SLIDE BUTTON */}
    </div>
  );
};

export default SliderDefault;
