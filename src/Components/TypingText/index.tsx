import React from "react";
import * as customHooks from "../../Hooks";

interface TypingTextProps {
  textList: string[];
}

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_MS = 150;
const PAUSING_MS = 1500;
const DELETING_MS = 50;

const TypingText: React.FC<TypingTextProps> = (props) => {
  const { textList } = props;

  const [typingText, setTypingText] = React.useState<string>("");
  const [selectedIdx, setSelectedIdx] = React.useState<number>(0);
  const [phase, setPhase] = React.useState<number>(Phase.Typing);

  const typingTextMode = customHooks.useMode("typing-text__wrapper");
  const lineTheme = customHooks.useTheme("wrapper__line");

  React.useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypingText = textList[selectedIdx]?.slice(
          0,
          typingText?.length + 1
        );
        if (nextTypingText === typingText) {
          setPhase(Phase.Pausing);
          return;
        }
        const timeout = setTimeout(
          () => setTypingText(nextTypingText),
          TYPING_MS
        );
        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!typingText) {
          const nextIdx = selectedIdx + 1;
          setSelectedIdx(textList[selectedIdx] ? nextIdx : 0);
          setPhase(Phase.Typing);
          return;
        }
        const nextRamaining = textList[selectedIdx]?.slice(
          0,
          typingText?.length - 1
        );
        const timeout = setTimeout(
          () => setTypingText(nextRamaining),
          DELETING_MS
        );
        return () => clearTimeout(timeout);
      }

      default:
        const timeout = setTimeout(() => setPhase(Phase.Deleting), PAUSING_MS);
        return () => clearTimeout(timeout);
    }
  }, [textList, typingText, selectedIdx, phase]);

  return (
    <div className="typing-text">
      <p className={`typing-text__wrapper ${typingTextMode}`}>
        <span className="wrapper__text">{typingText}</span>
        <span className={`wrapper__line ${lineTheme}`}></span>
      </p>
    </div>
  );
};

export default TypingText;
