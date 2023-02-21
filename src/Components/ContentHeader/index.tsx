import React from "react";
import * as customHooks from "../../Hooks";

interface ContentHeaderProps {
  title?: string;
  isMode?: boolean;
  containerClass?: string;
  titleClass?: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = (props) => {
  const { title = "Header", isMode, containerClass, titleClass } = props;

  const headerMode = customHooks.useMode("content-header");

  return (
    <div
      className={`content-header ${isMode && headerMode} ${
        containerClass ? containerClass : ""
      }`}
    >
      <h3 className={`content-header__title ${titleClass ? titleClass : ""}`}>
        {title}
      </h3>
      <div className="content-header__line"></div>
      <div className="content-header__line"></div>
    </div>
  );
};

export default ContentHeader;
