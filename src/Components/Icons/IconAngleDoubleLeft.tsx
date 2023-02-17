import React from "react";

interface IconAngleDoubleLeftProps {
  className?: string;
  onClick?(): void;
}

const IconAngleDoubleLeft: React.FC<IconAngleDoubleLeftProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angles-left ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleDoubleLeft;
