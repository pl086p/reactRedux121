import { SET_GRID_SIZE, TOGGLE_CELL } from '../actions/travelGridActions';
import { SET_LOGS_FILTER, SET_SELECTED_LOG  } from '../actions/logListActions';

const gridReducer = (state, action) => {
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

     
   
    case SET_LOGS_FILTER:

      return {
        ...state,
        WaldorfSelected: action.WaldorfSelected,
        OmahaSelected: action.OmahaSelected,
        logTypeID: action.logTypeID,
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

export default gridReducer;
