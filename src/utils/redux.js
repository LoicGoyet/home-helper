/**
 * Generate an id for new entries in state
 * @param {number[]} allIds collection of all the ids registered in state
 */
export const generateId = allIds => {
  if (allIds.length === 0) return 0;
  return Math.max(...allIds) + 1;
};

/**
 * Retrieve the last id created in state
 * @param {number[]} allIds collection of all the ids registered in state
 */
export const getLastIdGenerated = allIds => Math.max(...allIds);
