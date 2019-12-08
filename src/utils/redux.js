/**
 * Generate an id for new entries in state
 * @param {number[]} allIds collection of all the ids registered in state
 */
export const generateId = allIds => {
  if (allIds.length === 0) return 0;
  return allIds.length;
};
