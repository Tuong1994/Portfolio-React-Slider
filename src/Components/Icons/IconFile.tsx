import React from "react";

interface IconFileProps {
  className?: string;
  onClick?(): void;
}

const IconFile: React.FC<IconFileProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-file ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconFile;
