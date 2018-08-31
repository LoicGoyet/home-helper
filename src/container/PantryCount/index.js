import { connect } from 'react-redux';

import PantryCount from '../../components/PantryCount';

const mapStateToProps = state => {
  const { tags, pantry } = state.recipes;

  const counts = tags.allIds.reduce(
    (acc, tagId) => {
      const label = tags.byId[tagId].title;
      const value = pantry.allIds.filter(pantryId => pantry.byId[pantryId].tags.indexOf(tagId) > -1).length;

      return [
        ...acc,
        {
          label,
          value,
        },
      ];
    },
    [
      {
        label: 'total',
        value: pantry.allIds.length,
        isTotal: true,
      },
    ]
  );

  return {
    counts,
  };
};

export default connect(mapStateToProps)(PantryCount);
