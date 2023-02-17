import React from "react";

interface IconBriefCaseProps {
  className?: string;
  onClick?(): void;
}

const IconBriefCase: React.FC<IconBriefCaseProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-sharp fa-solid fa-briefcase ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconBriefCase;
