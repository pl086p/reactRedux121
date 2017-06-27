import { SET_GRID_SIZE, TOGGLE_CELL }         from '../actions/travelGridActions';

import { SET_LOGS_FILTER, 
         SET_SELECTED_LOG, 
         REQUEST_LOGS, RECEIVE_LOGS, 
         REQUEST_LOG,  RECEIVE_LOG,
         NEW_LOG_MODAL
       } from '../actions/logListActions';

import { SAVE_LOG, 
         CLONE_LOG 
       } from '../actions/logEditActions';

const allReducers = (state, action) => {
//export const gridReducer = (state, action) => {
  switch (action.type) {

    case SET_GRID_SIZE:
      /**
       * Create a new array.
       */
      const newCells = new Array(action.width * action.height).fill(0);

      /**
       * Copy previous picture.
       */
      for (let y = 0; y < state.height; y++) {
        for (let x = 0; x < state.width; x++) {
          newCells[y * action.width + x] = state.cells[y * state.width + x];
        }
      }

      /**
       * Return new state.
       */
      return {
        ...state,
        width: action.width,
        height: action.height,
        cells: newCells
      };

    case TOGGLE_CELL:
      /* Copy cells. */
      const cells = [...state.cells];
      const {x, y} = action;

      const val = cells[y * state.width + x];

      /* Toggle the value. */
      cells[y * state.width + x] = val === 1 ? 0 : 1;

      /* Return the next state. */
      return {
        ...state,
        cells
      };

 
    
    case SET_SELECTED_LOG:

      return {
        ...state,
        logID: action.logID
      };
    
    ////////////////////////////////////////////////////////////////
    // logListReducer ////////////////////////////////////////////// 
    case SET_LOGS_FILTER:

      return {
        ...state,
        WaldorfSelected: action.WaldorfSelected,
        OmahaSelected: action.OmahaSelected,
        logTypeID: action.logTypeID,
        logType:   action.logTypeID,
      };

    case REQUEST_LOGS:
      return {
        ...state,
        requestLogsURL: action.requestLogsURL
      };

    case RECEIVE_LOGS:
      return {
        ...state,
        toLoadLogsFromAPI: action.toLoadLogsFromAPI,
        logsFromAPI:       action.logsFromAPI,
        lastUpdated:       action.receivedAt
      };   

    case REQUEST_LOG:
      return {
        ...state,
        logID:         action.logID,
        requestLogURL: action.requestLogURL
      };

    case RECEIVE_LOG:
      return {
        ...state,
        logID:   action.logID,
        logData: action.logData
      };        
   
    case NEW_LOG_MODAL:
      return {
        ...state,
        newLogModalIsOpen:   action.newLogModalIsOpen
      };   

    ////////////////////////////////////////////////////////////////
    // logEditReducer ////////////////////////////////////////////// 
    
    case SAVE_LOG:
      return {
        ...state,
        myEdit: action.myEdit
      };

    case CLONE_LOG:
      return {
        ...state,
        myEdit: action.myEdit
      }; 

    default:
      return state;
  }
};

export default allReducers;
