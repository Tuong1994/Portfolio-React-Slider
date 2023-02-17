import React from "react";

interface IconAngleDownProps {
  className?: string;
  onClick?(): void;
}

const IconAngleDown: React.FC<IconAngleDownProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angle-down ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleDown;
