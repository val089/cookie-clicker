const CLICK_COUNTER_INC = "CLICK_COUNTER_INC";
const LEVEL_COUNTER_INC = "LEVEL_COUNTER_INC";
const COUNTER_RESET = "COUNTER_RESET";
const ADD_TO_AWARDS = "ADD_TO_AWARDS";

export const clickInc = () => ({ type: CLICK_COUNTER_INC });
export const levelInc = () => ({ type: LEVEL_COUNTER_INC });
export const reset = () => ({ type: COUNTER_RESET });
export const addToAwards = (item) => ({
  type: ADD_TO_AWARDS,
  payload: {
    item
  }
});

const INITIAL_STATE = {
  clicked: 0,
  level: 1,
  awards: []
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK_COUNTER_INC:
      return { ...state, clicked: state.clicked + 1 };
    case COUNTER_RESET:
      return { ...state, clicked: 0, level: 1, awards: [] };
    case LEVEL_COUNTER_INC:
      return { ...state, level: state.level + 1 };
    case ADD_TO_AWARDS:
      return {
        ...state,
        awards: [...state.awards, action.payload.item]
      };
    default:
      return state;
  }
};

export default counterReducer;
