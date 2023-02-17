import useThemeStore, { ETheme } from "../Store/Theme";

const useTheme = (className: string) => {
  const theme = useThemeStore((state) => state.theme);
  const classes: any = {
    [ETheme.green]: `${className}--green`,
    [ETheme.red]: `${className}--red`,
    [ETheme.purple]: `${className}--purple`,
  };
  return classes[theme] ?? `${className}--green`;
};

export default useTheme;