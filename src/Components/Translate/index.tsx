import React from "react";
import * as customHooks from "../../Hooks";
import { ELang } from "../../Lang";
import useLangStore from "../../Store/Lang";

interface TranslateProps {
  className?: string;
}

const Translate: React.FC<TranslateProps> = (props) => {
  const { className } = props;

  const lang = useLangStore((state) => state.lang);
  const switchLang = useLangStore((state) => state.switchLang);
  
  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);
  
  const ref = React.useRef<HTMLDivElement>(null);
  
  const selectionMode = customHooks.useMode("translate__selection");
  const dropdownMode = customHooks.useMode("translate__dropdown");
  customHooks.useClickOutSide(ref, setIsDropdown);

  return (
    <div className={`translate ${className ? className : ""}`} ref={ref}>
      <div
        className={`translate__selection ${selectionMode}`}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        {lang === ELang.eng ? "ENG." : "VN."}
      </div>

      <div
        className={`translate__dropdown ${
          isDropdown ? "translate__dropdown--active" : ""
        } ${dropdownMode}`}
      >
        <div
          className="dropdown__item"
          onClick={() => {
            switchLang(ELang.eng);
            setIsDropdown(false);
          }}
        >
          ENG.
        </div>

        <div
          className="dropdown__item"
          onClick={() => {
            switchLang(ELang.vn);
            setIsDropdown(false);
          }}
        >
          VN.
        </div>
      </div>
    </div>
  );
};

export default Translate;
