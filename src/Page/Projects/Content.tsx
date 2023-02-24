import React from "react";
import * as Components from "../../Components";
import { ILang } from "../../Lang";

interface ContentProps {
  langs: ILang | null;
  company: string;
  descript: string;
  role: string;
  tech: string;
  link: string;
  pass: string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { langs, company, descript, role, tech, link, pass } = props;

  return (
    <div className="item__content">
      <div className="content__wrapper">
        <div className="wrapper__inner">
          <Components.Icons.IconBuilding className="inner__icon" />
          <span className="inner__text">{company}</span>
        </div>
        <div className="wrapper__inner">
          <span>{langs?.pages.projects.subtitle_1} :</span>
          <span className="inner__text">{descript}</span>
        </div>
        <div className="wrapper__inner">
          <span>{langs?.pages.projects.subtitle_2} :</span>
          <span className="inner__text">{role}</span>
        </div>
        <div className="wrapper__inner">
          <span>{langs?.pages.projects.subtitle_3} :</span>
          <span className="inner__text">{tech}</span>
        </div>
        <ul className="wrapper__list">
          <li>
            <a href={link} target="_blank">
              {link}
            </a>
          </li>
          <li>{pass}</li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
