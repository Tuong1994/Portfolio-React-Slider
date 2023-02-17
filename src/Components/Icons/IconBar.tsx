import React from "react";

interface IconBarProps {
  className?: string;
  onClick?(): void;
}

const IconBar: React.FC<IconBarProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa fa-bars ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconBar;