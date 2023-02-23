import React from "react";
import * as customHooks from "../../Hooks";
import * as Components from "../../Components";
import utils from "../../Utils";

interface FrontEndProps {}

const skills = [
  {
    id: utils.uuid(),
    name: "HTML/HTML5",
    percent: 70,
  },
  {
    id: utils.uuid(),
    name: "CSS/CSS3",
    percent: 65,
  },
  {
    id: utils.uuid(),
    name: "Javascript",
    percent: 65,
  },
  {
    id: utils.uuid(),
    name: "ReactJs",
    percent: 65,
  },
  {
    id: utils.uuid(),
    name: "Redux/Redux-toolkit",
    percent: 65,
  },
];

const FrontEnd: React.FC<FrontEndProps> = (props) => {
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

export default FrontEnd;
