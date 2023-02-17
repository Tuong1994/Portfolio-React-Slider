import React from "react";

interface IconLightBulbProps {
  className?: string;
  onClick?(): void;
}

const IconLightBulb: React.FC<IconLightBulbProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-lightbulb ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconLightBulb;
