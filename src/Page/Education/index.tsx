import React from "react";
import * as customHooks from "../../Hooks";

interface EducationProps {}

const Education: React.FC<EducationProps> = (props) => {
  const educationTheme = customHooks.useTheme("education");

  return <div className={`education ${educationTheme}`}>
    <div className="education__tabs">
      <div className="tabs__title"></div>
      <div className="tabs__content"></div>
    </div>
  </div>;
};

export default Education;
