import React from "react";

interface IconArrowUpFormSquareProps {
  className?: string;
  onClick?(): void;
}

const IconArrowUpFormSquare: React.FC<IconArrowUpFormSquareProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-arrow-up-right-from-square ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconArrowUpFormSquare;
