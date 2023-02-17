import React from "react";
import * as Components from "../Components";

interface SliderMenuProps {
  isShow: boolean;
  renderMenu(s: boolean): React.ReactNode;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SliderMenu: React.FC<SliderMenuProps> = (props) => {
  const { isShow, renderMenu, setIsShow } = props;

  return (
    <div className={`slider-menu ${isShow ? "slider-menu--active" : ""}`}>
      <div className="slider-menu__header">
        <h3 className="header__logo">T.</h3>
      </div>

      <div className="slider-menu__wrapper">{renderMenu(false)}</div>

      <div className="slider-menu__footer">
        <Components.Icons.IconAngleDoubleLeft
          className="header__icon"
          onClick={() => setIsShow(false)}
        />
      </div>
    </div>
  );
};

export default SliderMenu;
