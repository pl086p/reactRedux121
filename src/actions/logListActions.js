import ApiByRequest, {REQUEST_LOGS_URL} from '../api/ApiByRequest';

export const SET_LOGS_FILTER  = 'SET_LOGS_FILTER';
export const SET_SELECTED_LOG = 'SET_SELECTED_LOG';
export const REQUEST_LOGS = 'REQUEST_LOGS';
export const RECEIVE_LOGS = 'RECEIVE_LOGS';
export const REQUEST_LOG  = 'REQUEST_LOG';
export const RECEIVE_LOG  = 'RECEIVE_LOG';
export const NEW_LOG_MODAL= 'NEW_LOG_MODAL';

export const setLogsFilter = ({WaldorfSelected, OmahaSelected, logType}) => ({
  type: SET_LOGS_FILTER,
  WaldorfSelected,
  OmahaSelected,
  logType,
  logTypeID : logType
});

export const setNewLogModal = (isOpen) => ({
  type: NEW_LOG_MODAL,
  newLogModalIsOpen: isOpen
});

/////////////////////////////////////////////////////////////////
// get all logs 
export const requestLogs = (requestLogsURL) => ({
  type: REQUEST_LOGS,
  requestLogsURL 
})

export const receiveLogs = (json) => ({
  type: RECEIVE_LOGS,
  logsFromAPI: json,
  toLoadLogsFromAPI: false
});

const fetchLogs = () => (dispatch) => {

  const requestLogsURL = REQUEST_LOGS_URL; //'http://localhost:8080/logs';
  dispatch(requestLogs(requestLogsURL));

  return ApiByRequest.fetchLogsAPI(dispatch, receiveLogs);
  // or 
  /* return fetch(requestLogsURL)
    .then(response => response.json())
    .then(json => dispatch(receiveLogs(json)));
   */
};

export const getLogsFromAPI = () => (dispatch) => {
    return dispatch(fetchLogs())
};

/////////////////////////////////////////////////////////////////
// get log detail by logID 

export const requestLog = (requestLogURL) => ({
  type: REQUEST_LOG,
  requestLogURL 
})

export const receiveLog = (logID, json) => ({
  type: RECEIVE_LOG,
  logID,
  logData: json
});

const fetchLog = (logID) => (dispatch) => {

  const requestLogURL = REQUEST_LOGS_URL + '/' + String(logID); //'http://localhost:8080/logs/' + String(logID);
  dispatch(requestLog(requestLogURL));
  return ApiByRequest.fetchLogAPI(logID, dispatch, receiveLog);
  // or
  //return fetch(requestLogURL)
  //  .then(response => response.json())
  //  .then(json => dispatch(receiveLog(logID, json)));
  
};

export const getLogDataFromAPI = (logID) => (dispatch) => {
    return dispatch(fetchLog(logID))
};
