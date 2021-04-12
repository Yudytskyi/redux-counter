import ACTION_TYPE from './types';

export const createIncrementAction = () => ({
  type: ACTION_TYPE.INCREMENT,
});
export const createDecrementAction = () => ({
  type: ACTION_TYPE.DECREMENT,
});
export const createSetStepAction = value => ({
  type: ACTION_TYPE.SET_STEP,
  value,
});
