import React from "react";
import * as customHooks from "../../Hooks";

interface ProgressBarProps {
  percent?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { percent } = props;

  const [width, setWidth] = React.useState<number>(0);

  const barTheme = customHooks.useTheme("progress-bar");

  React.useEffect(() => {
    if (percent) {
      const interval = setInterval(() => {
        setWidth((oldVal) => {
          const newVal = oldVal + 1;
          if (newVal > percent) clearInterval(interval);
          return newVal;
        });
      }, 20);
    }
  }, []);

  const barStyle: React.CSSProperties = {
    width: `${width}%`,
  };

  return (
    <div className={`progress-bar ${barTheme}`}>
      <div className="progress-bar__percent" style={barStyle}></div>
    </div>
  );
};

export default ProgressBar;
