import React from "react";

interface IconGraduationHatProps {
  className?: string;
  onClick?(): void;
}

const IconGraduationHat: React.FC<IconGraduationHatProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-sharp fa-solid fa-graduation-cap ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconGraduationHat;
