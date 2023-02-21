import React from "react";
import * as customHooks from "../../Hooks";

export interface ITabs {
  id: string;
  title: string;
  content: string | React.ReactNode | React.ReactNode[];
}

interface TabsProps {
  list?: ITabs[];
  isMode?: boolean;
  isTheme?: boolean;
  containerClass?: string;
  titleClass?: string;
  contentClass?: string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { list, isTheme, isMode, containerClass, titleClass, contentClass } =
    props;

  const [isActive, setIsActive] = React.useState<number>(0);

  const indicatorStyle: React.CSSProperties = {
    width: `calc(100% / ${list?.length})`,
  };

  const tabsMode = customHooks.useMode("tabs");

  const titleTheme = customHooks.useTheme("title__item");
  const indicatorTheme = customHooks.useTheme("tabs__indicator");

  React.useEffect(() => {
    const indicator = document.getElementById("tabIndicator");
    if (indicator) {
      indicator.style.left = `calc(calc(100% / ${list?.length}) * ${isActive})`;
    }
  }, [isActive]);

  return (
    <div
      className={`tabs ${isMode && tabsMode} ${
        containerClass ? containerClass : ""
      }`}
    >
      <div className={`tabs__title ${titleClass ? titleClass : ""}`}>
        {list &&
          list.map((l, idx) => (
            <div
              key={l.id}
              className={`title__item ${
                isActive === idx && isTheme && titleTheme
              }`}
              onClick={() => setIsActive(idx)}
            >
              {l.title}
            </div>
          ))}
      </div>

      <div
        id="tabIndicator"
        className={`tabs__indicator ${
          isTheme && indicatorTheme
        }`}
        style={indicatorStyle}
      ></div>

      <div className={`tabs__content ${contentClass ? contentClass : ""}`}>
        {list &&
          list.map((l, idx) => (
            <div
              key={l.id}
              className={`content__item ${
                isActive === idx ? "content__item--active" : ""
              }`}
            >
              {l.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
