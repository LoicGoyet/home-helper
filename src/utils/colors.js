import Color from 'color';

export const strToColor = string => {
  /* eslint-disable no-bitwise */
  const hash = string.split('').reduce((acc, char) => char.charCodeAt() + ((acc << 5) - acc), 0);

  return [...Array(3)].reduce((acc, item, index) => {
    const value = (hash >> (index * 8)) & 0xff;
    return `${acc}${`00${value.toString(16)}`.substr(-2)}`;
  }, '#');
  /* eslint-enable no-bitwise */
};

export const getContrastYIQ = strcolor => {
  const color = Color(strcolor);
  const yiq = (color.red() * 299 + color.green() * 587 + color.blue() * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

export const alpha = (strcolor, amount) =>
  Color(strcolor)
    .alpha(amount)
    .string();

export const darken = (strcolor, amount) =>
  Color(strcolor)
    .darken(amount)
    .rgb()
    .string();

export const lighten = (strcolor, amount) =>
  Color(strcolor)
    .lighten(amount)
    .rgb()
    .string();

export const isLight = strcolor => Color(strcolor).isLight();
