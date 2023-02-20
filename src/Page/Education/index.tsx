import React from "react";
import * as customHooks from "../../Hooks";
import * as Components from "../../Components";
import useLangStore from "../../Store/Lang";
import utils from "../../Utils";

interface EducationProps {}

const list = [
  {
    id: utils.uuid(),
    name: "Front End",
    content: {
      school: "Cybersoft Academy",
      time: "09/2020 - 04/2021",
      tech: "HTML/HTML5, CSS/CSS3, Javascript, Typescript, ReactJs (Class/Hook), Redux, Git",
    },
  },
  {
    id: utils.uuid(),
    name: "Back End",
    content: {
      school: "Cybersoft Academy",
      time: "06/2021 - 08/2021",
      tech: "NodeJs, Sequelize, MySQL, SocketIO",
    },
  },
];

const Education: React.FC<EducationProps> = (props) => {
  const educationTheme = customHooks.useTheme("education");

  const langs = useLangStore((state) => state.langs);

  return (
    <div className={`education ${educationTheme}`}>
      <Components.ContentHeader title={langs?.pages.education.title} />
      <div className="education__content">
        {list.map((l) => (
          <div key={l.id} className="content__item">
            <h3 className="item__title">{l.name}</h3>
            <div className="item__content">
              <div className="content__detail">
                <Components.Icons.IconSchool className="detail__icon" />
                <div className="detail__text">{l.content.school}</div>
              </div>
              <div className="content__detail">
                <Components.Icons.IconCalendar className="detail__icon" />
                <div className="detail__text">{l.content.time}</div>
              </div>
              <div className="content__detail">
                <Components.Icons.IconBook className="detail__icon" />
                <div className="detail__text">{l.content.tech}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
