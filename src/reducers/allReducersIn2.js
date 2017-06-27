import { SAVE_LOG, 
         CLONE_LOG 
       } from '../actions/logEditActions';
       
import { SET_LOGS_FILTER, 
         SET_SELECTED_LOG, 
         REQUEST_LOGS, RECEIVE_LOGS, 
         REQUEST_LOG,  RECEIVE_LOG,
          NEW_LOG_MODAL
       } from '../actions/logListActions';

/////////////////////////////////////////////////////////////////////////////////

export const logListReducer = (state, action) => {

  switch (action.type) {

    case SET_LOGS_FILTER:

      return {
        ...state,
        WaldorfSelected: action.WaldorfSelected,
        OmahaSelected:   action.OmahaSelected,
        logType:         action.logType //logTypeID: action.logTypeID,
      };

    case REQUEST_LOGS:
      return {
        ...state,
        requestLogsURL: action.requestLogsURL
      }
    case RECEIVE_LOGS:
      return {
        ...state,
        toLoadLogsFromAPI: action.toLoadLogsFromAPI,
        logsFromAPI:       action.logsFromAPI,
        lastUpdated:       action.receivedAt
      }   

    case REQUEST_LOG:
      return {
        ...state,
        logID:         action.logID,
        requestLogURL: action.requestLogURL
      }

    case RECEIVE_LOG:
      return {
        ...state,
        logID:   action.logID,
        logData: action.logData
      }        
   
    case NEW_LOG_MODAL:
      return {
        ...state,
        newLogModalIsOpen:   action.newLogModalIsOpen
      } 

    default:
      return state;
    
  }
};

export const logEditReducer = (state, action) => {
  switch (action.type) {
    
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

