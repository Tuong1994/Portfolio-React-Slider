import React from "react";
import * as Components from "../Components";
import { IEducations } from "../Page/Education";

interface EducationContentProps {
  list: IEducations;
}

const EducationContent: React.FC<EducationContentProps> = (props) => {
  const { list } = props;

  const [isActive, setIsActive] = React.useState<number>(0);

  React.useEffect(() => {
    const indicator = document.getElementById("indicator");
    if (indicator)
      indicator.style.left = `calc(calc(100% / ${list.length}) * ${isActive})`;
  }, [isActive]);

  return (
    <div className="education-content">
      <div className="education-content__title">
        {list.map((l, idx) => (
          <div
            key={l.id}
            className="title__item"
            onClick={() => setIsActive(idx)}
          >
            {l.name}
          </div>
        ))}
      </div>

      <div id="indicator" className="education-content__indicator"></div>

      <div className="education-content__detail">
        {list.map((l, idx) => (
          <div
            key={l.id}
            className={`detail__item ${
              isActive === idx ? "detail__item--active" : ""
            }`}
          >
            <div className="item__inner">
              <Components.Icons.IconSchool className="inner__icon" />
              <div className="inner__text">{l.content.school}</div>
            </div>
            <div className="item__inner">
              <Components.Icons.IconCalendar className="inner__icon" />
              <div className="inner__text">{l.content.time}</div>
            </div>
            <div className="item__inner">
              <Components.Icons.IconBook className="inner__icon" />
              <div className="inner__text">{l.content.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationContent;
