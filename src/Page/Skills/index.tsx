import React from "react";
import * as Components from "../../Components";
import { ITabs } from "../../Components/Tabs";
import useLangStore from "../../Store/Lang";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Others from "./Others";
import utils from "../../Utils";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const list: ITabs[] = [
    {
      id: utils.uuid(),
      title: "Front End",
      content: <FrontEnd />,
    },
    {
      id: utils.uuid(),
      title: "Back End",
      content: <BackEnd />,
    },
    {
      id: utils.uuid(),
      title: langs?.pages.skills.others ?? "",
      content: <Others langs={langs} />,
    },
  ];

  return (
    <div className="skills">
      <Components.ContentHeader
        isMode
        title={langs?.pages.skills.title}
        containerClass="skills__title"
      />
      <Components.Tabs
        list={list}
        indicatorId="skillIndicator"
        isBorder
        isMode
        isTheme
      />
    </div>
  );
};

export default Skills;
