import React from "react";

interface IconBuildingProps {
  className?: string;
  onClick?(): void;
}

const IconBuilding: React.FC<IconBuildingProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-building ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconBuilding;
