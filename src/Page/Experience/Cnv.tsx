import React from "react";
import * as Components from "../../Components";
import { ILang } from "../../Lang";

interface CnvProps {
  langs: ILang | null;
}

const Cnv: React.FC<CnvProps> = (props) => {
  const { langs } = props;

  return (
    <div className="experience__detail">
      <div className="detail__image">
        <div className="image__wrapper">
          <img
            src="/assets/images/cnv_logo.png"
            alt="logo"
            className="wrapper__view"
          />
        </div>
      </div>
      <div className="detail__inner">
        <div className="inner__item">
          <Components.Icons.IconBuilding className="item__icon" />
          <span className="item__text">
            {langs?.pages.experience.company_1.name} (11/2021 - 03/2023)
          </span>
        </div>
        <div className="inner__item">
          <Components.Icons.IconUser className="item__icon" />
          <span className="item__text">
            {langs?.pages.experience.company_1.position}
          </span>
        </div>
        <ul className="inner__list">
          <li className="list__inner">
            {langs?.pages.experience.company_1.content.line_1}
          </li>
          <li className="list__inner">
            {langs?.pages.experience.company_1.content.line_2}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cnv;
