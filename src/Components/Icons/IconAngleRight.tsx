import React from "react";

interface IconAngleRightProps {
  className?: string;
  onClick?(): void;
}

const IconAngleRight: React.FC<IconAngleRightProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angle-right ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleRight;
