import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import { ITabs } from "../../Components/Tabs";
import useLangStore from "../../Store/Lang";
import Cnv from "./Cnv";
import Cropcom from "./Cropcom";
import utils from "../../Utils";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const experienceTheme = customHooks.useTheme("experience");

  const list: ITabs[] = [
    {
      id: utils.uuid(),
      title: "CNV",
      content: <Cnv langs={langs} />,
    },
    {
      id: utils.uuid(),
      title: "Cropcom",
      content: <Cropcom langs={langs} />,
    },
  ];

  return (
    <div className={`experience ${experienceTheme}`}>
      <Components.ContentHeader title={langs?.pages.experience.title} />

      <Components.Tabs list={list} indicatorId="experienceIndicator" />
    </div>
  );
};

export default Experience;
