import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import utils from "../../Utils";

interface BackEndProps {}

const skills = [
  {
    id: utils.uuid(),
    name: "NodeJs/Express",
    percent: 60,
  },
  {
    id: utils.uuid(),
    name: "Sequelize",
    percent: 55,
  },
  {
    id: utils.uuid(),
    name: "MySQL",
    percent: 50,
  },
];

const BackEnd: React.FC<BackEndProps> = (props) => {
  const innerMode = customHooks.useMode("skills__inner");

  return (
    <div className={`skills__inner ${innerMode}`}>
      {skills.map((s) => (
        <div className="inner__item" key={s.id}>
          <div className="item__title">{s.name}</div>
          <Components.ProgressBar percent={s.percent} />
        </div>
      ))}
    </div>
  );
};

export default BackEnd;
