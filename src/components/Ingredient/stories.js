import React from 'react';
import COLORS from 'style/colors';

import Ingredient from './index';

export default {
  title: 'Components|Ingredient',
};

export const defaultProps = () => <Ingredient name="Pain au chocolat" quantity={2} unit="pièce(s)" />;

export const withCheckbox = () => (
  <React.Fragment>
    <Ingredient isChecked color="#695989" name="Pain au chocolat" quantity={2} unit="pièce(s)" />
    <Ingredient isChecked={false} color="#695989" name="Croissants" quantity={14} unit="pièce(s)" />
  </React.Fragment>
);
