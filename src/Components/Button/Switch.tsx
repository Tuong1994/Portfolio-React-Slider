import React from "react";
import * as customHooks from "../../Hooks";

interface SwitchBtnProps {
  className?: string;
  preffix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  checked?: boolean;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick?(): void;
}

const SwitchBtn: React.FC<SwitchBtnProps> = (props) => {
  const { className, preffix, suffix, checked, onChange, onClick } = props;

  const controlTheme = customHooks.useTheme("switch-btn__control");

  return (
    <div className={`switch-btn ${className ? className : ""}`}>
      {preffix && <span className="switch-btn__addon">{preffix}</span>}

      <input
        className={`switch-btn__control ${controlTheme}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />

      {suffix && <span className="switch-btn__addon">{suffix}</span>}
    </div>
  );
};

export default SwitchBtn;
