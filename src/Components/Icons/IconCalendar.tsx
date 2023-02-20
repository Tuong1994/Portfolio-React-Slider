import React from "react";

interface IconCalendarProps {
  className?: string;
  onClick?(): void;
}

const IconCalendar: React.FC<IconCalendarProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-calendar ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconCalendar;
