import useThemeStore from "../Store/Theme";

const useMode = (className: string) => {
  const mode = useThemeStore((state) => state.mode);
  return mode ? `${className}--dark` : `${className}--light`;
};

export default useMode;
