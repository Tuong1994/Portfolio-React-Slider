import React from "react";
import * as Components from "../../Components";
import { ILang } from "../../Lang";

interface CropcomProps {
  langs: ILang | null;
}

const Cropcom: React.FC<CropcomProps> = (props) => {
  const { langs } = props;

  return (
    <div className="experience__detail">
      <div className="detail__image">
        <div className="image__wrapper">
          <img
            src="/assets/images/cropcom.png"
            alt="logo"
            className="wrapper__view"
          />
        </div>
      </div>
      <div className="detail__inner">
        <div className="inner__item">
          <Components.Icons.IconBuilding className="item__icon" />
          <span className="item__text">
            {langs?.pages.experience.company_2.name} (03/2023)
          </span>
        </div>
        <div className="inner__item">
          <Components.Icons.IconUser className="item__icon" />
          <span className="item__text">
            {langs?.pages.experience.company_2.position}
          </span>
        </div>
        <ul className="inner__list">
          <li className="list__inner">
            {langs?.pages.experience.company_2.content.line_1}
          </li>
          <li className="list__inner">
            {langs?.pages.experience.company_2.content.line_2}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cropcom;
