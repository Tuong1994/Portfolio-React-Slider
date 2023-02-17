import React from "react";
import * as Components from "../..";
import * as customHooks from "../../../Hooks";

interface SideBarProps {
  isShrink: boolean;
  renderMenu(s: boolean): React.ReactNode;
  setIsShrink: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const { isShrink, renderMenu, setIsShrink } = props;

  const logoTheme = customHooks.useTheme("header__logo");

  return (
    <div
      className={`slider-default__menu ${
        isShrink ? "slider-default__menu--shrink" : ""
      }`}
    >
      <div className="menu__header">
        <h3 className={`header__logo ${logoTheme}`}>T.</h3>
      </div>

      <div className="menu__wrapper">{renderMenu(true)}</div>

      <div className="menu__footer">
        <Components.Icons.IconAngleDoubleLeft
          className={`header__icon ${isShrink ? "header__icon--shrink" : ""}`}
          onClick={() => setIsShrink(!isShrink)}
        />
      </div>
    </div>
  );
};

export default SideBar;
