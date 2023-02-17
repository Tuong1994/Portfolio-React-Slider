import React from "react";
import * as Components from "./Components";
import * as Page from "./Page";
import { ISlide } from "./Components/Slider";
import useLangStore from "./Store/Lang";
import "./Style/main.scss";

const App: React.FC = () => {
  const langs = useLangStore((state) => state.langs);

  const slides: ISlide[] = [
    {
      icon: <Components.Icons.IconHouse />,
      content: <Page.Home />,
      menuName: langs?.menu.home,
    },
    {
      icon: <Components.Icons.IconGraduationHat />,
      content: <Page.Education />,
      menuName: langs?.menu.education,
    },
    {
      icon: <Components.Icons.IconArrowUpFormSquare />,
      content: <Page.Skills />,
      menuName: langs?.menu.skills,
    },
    {
      icon: <Components.Icons.IconBriefCase />,
      content: <Page.Experience />,
      menuName: langs?.menu.experience,
    },
    {
      icon: <Components.Icons.IconFile />,
      content: <Page.Projects />,
      menuName: langs?.menu.projects,
    },
    {
      icon: <Components.Icons.IconPhone />,
      content: <Page.Contact />,
      menuName: langs?.menu.contact,
    },
  ];

  return <Components.Slider.Default slides={slides} />;
};

export default App;
