import React from "react";

interface IconSchoolProps {
  className?: string;
  onClick?(): void;
}

const IconSchool: React.FC<IconSchoolProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-school ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconSchool;
