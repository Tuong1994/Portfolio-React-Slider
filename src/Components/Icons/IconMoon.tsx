import React from "react";

interface IconMoonProps {
  className?: string;
  onClick?(): void;
}

const IconMoon: React.FC<IconMoonProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-moon ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconMoon;
