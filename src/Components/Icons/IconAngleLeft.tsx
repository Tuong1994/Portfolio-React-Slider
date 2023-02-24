import React from "react";

interface IconAngleLeftProps {
  className?: string;
  onClick?(): void;
}

const IconAngleLeft: React.FC<IconAngleLeftProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angle-left ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleLeft;
