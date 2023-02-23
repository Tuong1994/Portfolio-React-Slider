import React from "react";

interface IconUserProps {
  className?: string;
  onClick?(): void;
}

const IconUser: React.FC<IconUserProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-user-tie ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconUser;
