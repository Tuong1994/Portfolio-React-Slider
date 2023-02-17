import React from "react";

const useClickOutSide = (
  ref: any,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleClickOutSide = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setTrigger(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("mousedown", handleClickOutSide);
    return () => window.removeEventListener("mousedown", handleClickOutSide);
  });
};


export default useClickOutSide;