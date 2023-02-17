import React from "react";

interface IconPhoneProps {
  className?: string;
  onClick?(): void;
}

const IconPhone: React.FC<IconPhoneProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-phone ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconPhone;
