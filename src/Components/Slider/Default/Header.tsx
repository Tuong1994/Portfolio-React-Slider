import React from "react";
import * as Components from "../..";
import * as customHooks from "../../../Hooks";
import useThemeStore from "../../../Store/Theme";

interface HeaderProps {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { setIsShow } = props;

  const mode = useThemeStore((state) => state.mode);
  const switchMode = useThemeStore((state) => state.switchMode);

  const containerMode = customHooks.useMode("container__header");
  const headerBtnMode = customHooks.useMode("header__button");
  const switchBtnIconMode = customHooks.useMode("features__switch-btn-icon");

  return (
    <div className={`container__header ${containerMode}`}>
      <button
        type="button"
        className={`header__button ${headerBtnMode}`}
        onClick={() => setIsShow(true)}
      >
        <Components.Icons.IconBar className="button__icon" />
      </button>

      <div className="header__features">
        <Components.Translate className="features__translate" />

        <Components.Button.Switch
          className="features__switch"
          preffix={
            <Components.Icons.IconLightBulb className={switchBtnIconMode} />
          }
          suffix={<Components.Icons.IconMoon className={switchBtnIconMode} />}
          checked={mode}
          onChange={(e) => switchMode(e.target.checked)}
        />

        <Components.SwitchColor />
      </div>
    </div>
  );
};

export default Header;
