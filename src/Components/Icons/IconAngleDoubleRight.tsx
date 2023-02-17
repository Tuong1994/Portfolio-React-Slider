import React from "react";

interface IconAngleDoubleRightProps {
  className?: string;
  onClick?(): void;
}

const IconAngleDoubleRight: React.FC<IconAngleDoubleRightProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angles-right ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleDoubleRight;
