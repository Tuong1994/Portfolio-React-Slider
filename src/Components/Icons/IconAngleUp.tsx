import React from "react";

interface IconAngleUpProps {
  className?: string;
  onClick?(): void;
}

const IconAngleUp: React.FC<IconAngleUpProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-angle-up ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconAngleUp;
