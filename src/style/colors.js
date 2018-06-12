const COLORS = {
  lightgray: 'rgb(240, 240, 240)',
  gray: 'gray',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  red: 'rgb(255, 18, 18)',
  transparent: 'rgba(0, 0, 0, 0)',
  blue: 'rgb(32, 83, 243)',
  green: 'yellowgreen',
  violet: 'rgb(20, 10, 67)',
};

export const THEMES = {
  default: COLORS.violet,
  info: COLORS.blue,
  success: COLORS.green,
  danger: COLORS.red,
};

export const isTheme = string => Object.keys(THEMES).includes(string);

export default COLORS;
