const COLORS = {
  lightgray: 'rgb(220, 220, 220)',
  gray: 'gray',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  red: 'rgb(255, 18, 18)',
  transparent: 'rgba(0, 0, 0, 0)',
  blue: 'rgb(32, 83, 243)',
  green: 'rgb(48, 202, 189)',
  violet: 'rgb(49, 22, 79)',
};

export const THEMES = {
  default: COLORS.violet,
  info: COLORS.blue,
  success: COLORS.green,
  danger: COLORS.red,
};

export const isTheme = string => Object.keys(THEMES).includes(string);

export default COLORS;
