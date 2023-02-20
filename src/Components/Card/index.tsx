import React from "react";

interface CardProps {
  containerClass?: string;
  title?: string;
  children?: string | React.ReactNode | React.ReactNode[];
}

const Card: React.FC<CardProps> = (props) => {
  const { containerClass, title = "CARD", children } = props;

  return (
    <div className={`card-custom ${containerClass}`}>
      <div className="card-custom__header">
        <h3 className="header__title">{title}</h3>
        <div className="header__decorator"></div>
      </div>

      <div className="card-custom__body">{children}</div>
    </div>
  );
};

export default Card;
