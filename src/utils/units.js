import * as R from 'ramda';

export const sortUnitsByAlphabetical = units => {
  const sortedUnitsAllIds = R.sort((unitIdA, unitIdB) => {
    const unitA = R.path(['byId', unitIdA], units);
    const unitB = R.path(['byId', unitIdB], units);
    return unitA.title < unitB.title;
  }, units.allIds);

  return {
    ...units,
    allIds: sortedUnitsAllIds,
  };
};
