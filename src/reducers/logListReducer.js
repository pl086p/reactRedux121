import { SET_LOGS_FILTER, SET_SELECTED_LOG  } from '../actions/logListActions';

const logListReducer = (state, action) => {
//export const logListReducer = (state, action) => {
  switch (action.type) {
    
    case SET_LOGS_FILTER:

      return {
        ...state,
        centerID: action.centerID,
        logTypeID: action.logTypeID
      };

    case SET_SELECTED_LOG:

      return {
        ...state,
        logID: action.logID
      };

    default:
      return state;
  }
};

export default logListReducer;
