import React from "react";

interface IconHouseProps {
  className?: string;
  onClick?(): void;
}

const IconHouse: React.FC<IconHouseProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-sharp fa-solid fa-house ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconHouse;
