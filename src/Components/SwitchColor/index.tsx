import React from "react";
import * as customHooks from "../../Hooks";
import useThemeStore, { ETheme } from "../../Store/Theme";

interface SwitchColorProps {}

const SwitchColor: React.FC<SwitchColorProps> = (props) => {
  const switchColor = useThemeStore((state) => state.switchColor);

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const previewTheme = customHooks.useTheme("switch-color__preview");

  customHooks.useClickOutSide(ref, setIsDropdown);

  return (
    <div className="switch-color" ref={ref}>
      <div
        className={`switch-color__preview ${previewTheme}`}
        onClick={() => setIsDropdown(!isDropdown)}
      ></div>

      <div
        className={`switch-color__dropdown ${
          isDropdown ? "switch-color__dropdown--active" : ""
        }`}
      >
        <div
          className="dropdown__item"
          onClick={() => {
            switchColor(ETheme.green);
            setIsDropdown(false);
          }}
        ></div>
        <div
          className="dropdown__item"
          onClick={() => {
            switchColor(ETheme.red);
            setIsDropdown(false);
          }}
        ></div>
        <div
          className="dropdown__item"
          onClick={() => {
            switchColor(ETheme.purple);
            setIsDropdown(false);
          }}
        ></div>
      </div>
    </div>
  );
};

export default SwitchColor;
