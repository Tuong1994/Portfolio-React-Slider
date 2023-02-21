import React from "react";
import * as Components from "../../Components";
import { ITabs } from "../../Components/Tabs";
import useLangStore from "../../Store/Lang";
import utils from "../../Utils";

interface SkillsProps {}

const list: ITabs[] = [
  {
    id: utils.uuid(),
    title: "Front End",
    content: "Front End",
  },
  {
    id: utils.uuid(),
    title: "Back End",
    content: "Back End",
  },
  {
    id: utils.uuid(),
    title: "Web",
    content: "Web",
  },
];

const Skills: React.FC<SkillsProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <div className="skills">
      <Components.ContentHeader
        isMode
        title={langs?.pages.skills.title}
        containerClass="skills__title"
      />
      <Components.Tabs list={list} isMode isTheme />
    </div>
  );
};

export default Skills;
