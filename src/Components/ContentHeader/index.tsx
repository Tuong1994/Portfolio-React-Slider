import React from "react";

interface ContentHeaderProps {
  title?: string;
  containerClass?: string;
  titleClass?: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = (props) => {
  const { title = "Header", containerClass, titleClass } = props;

  return (
    <div className={`content-header ${containerClass ? containerClass : ""}`}>
      <h3
        className={`content-header__title ${
          titleClass ? titleClass : ""
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default ContentHeader;
