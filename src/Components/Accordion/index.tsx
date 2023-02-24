import React from "react";
import * as Components from "..";
import * as customHooks from "../../Hooks";

interface AccordionProps {
  title?: string;
  content?: string | React.ReactNode | React.ReactNode[];
  containerClass?: string;
  titleClass?: string;
  contentClass?: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const {
    title,
    content,
    containerClass = "",
    titleClass = "",
    contentClass = "",
  } = props;

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const accordionRef = React.useRef<HTMLDivElement>(null);

  customHooks.useClickOutSide(accordionRef, setIsShow);

  const accordionMode = customHooks.useMode("accordion");
  const accordionTheme = customHooks.useTheme("accordion");

  return (
    <div
      ref={accordionRef}
      className={`accordion ${accordionMode} ${accordionTheme} ${containerClass}`}
    >
      <div
        className={`accordion__title ${titleClass}`}
        onClick={() => setIsShow(!isShow)}
      >
        <span className="title__text">{title ?? "ACCORDION"}</span>
        <Components.Icons.IconAngleDown
          className={`title__icon ${isShow ? "title__icon--rotate" : ""}`}
        />
      </div>

      <div
        className={`accordion__content ${
          isShow ? "accordion__content--active" : ""
        } ${contentClass}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
