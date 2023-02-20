import React from "react";

interface IconBookProps {
  className?: string;
  onClick?(): void;
}

const IconBook: React.FC<IconBookProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-book ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconBook;
