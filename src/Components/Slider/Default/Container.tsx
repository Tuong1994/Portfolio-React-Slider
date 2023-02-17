import React from "react";

interface ContainerProps {
  onTouchStart(e: React.TouchEvent<HTMLDivElement>): void;
  onTouchMove(e: React.TouchEvent<HTMLDivElement>): void;
  onTouchEnd(e: React.TouchEvent<HTMLDivElement>): void;
  onMouseStart(e: React.MouseEvent<HTMLDivElement>): void;
  onMouseMove(e: React.MouseEvent<HTMLDivElement>): void;
  onMouseEnd(e: React.MouseEvent<HTMLDivElement>): void;
  renderSlides(): React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
  const {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseStart,
    onMouseMove,
    onMouseEnd,
    renderSlides,
  } = props;

  return (
    <div
      className="container__slider"
      id="sliderContainer"
      onTouchStart={(e) => onTouchStart(e)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={(e) => onTouchEnd(e)}
      onMouseDown={(e) => onMouseStart(e)}
      onMouseMove={(e) => onMouseMove(e)}
      onMouseUp={(e) => onMouseEnd(e)}
      onMouseLeave={(e) => onMouseEnd(e)}
    >
      {renderSlides()}
    </div>
  );
};

export default Container;
