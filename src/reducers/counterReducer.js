import ACTION_TYPE from '../actions/types';

const initialState = {
  value: 0,
  step: 1,
};

const counterReducer = (state = initialState, action) => {
  const { type, value } = action;

  switch (type) {
    case ACTION_TYPE.INCREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };
    case ACTION_TYPE.DECREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };
    case ACTION_TYPE.SET_STEP:
      return {
        ...state,
        step: value,
      };
    default:
      return state;
  }
};

export default counterReducer;
