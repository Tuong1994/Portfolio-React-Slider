import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import { ILang } from "../../Lang";
import utils from "../../Utils";

interface OthersProps {
  langs: ILang | null;
}

const Others: React.FC<OthersProps> = (props) => {
  const { langs } = props;

  const innerMode = customHooks.useMode("skills__inner");

  const skills = [
    {
      id: utils.uuid(),
      name: "Git",
      percent: 60,
    },
    {
      id: utils.uuid(),
      name: langs?.pages.skills.eng,
      percent: 55,
    },
    {
      id: utils.uuid(),
      name: langs?.pages.skills.ch,
      percent: 50,
    },
    {
      id: utils.uuid(),
      name: langs?.pages.skills.team,
      percent: 50,
    },
  ];

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

export default Others;
