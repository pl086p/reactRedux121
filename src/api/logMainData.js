
/*
export const CONSTANT_LOG_TYPE = [ 
        {"ID": 0, "LogType": "All types of logs"},
        {"ID": 1, "LogType": "Looking Glass Flight Log"},
        {"ID": 2, "LogType": "Nightwatch Flight Log"},
        {"ID": 3, "LogType": "Nightwatch Hardstand Log"},
        {"ID": 4, "LogType": "Waldorf SATSTAR Log"},
        {"ID": 5, "LogType": "Omaha SATSTAR Log"}
];
*/
export const CONSTANT_LOG_TYPE = [ 
        {"ID": 0, "LogType": "ALL",          "Label": "All types of logs"},
        {"ID": 1, "LogType": "FlightLog",    "Label": "Flight Log"},
        {"ID": 2, "LogType": "HardstandLog", "Label": "Hardstand Log"},
        {"ID": 3, "LogType": "SatstarLog",   "Label": "SATSTAR Log"}
];

export const CONSTANT_LOG_DATA = [
  {"logID": 11, "logName": "Log-11", "center": "Waldorf", "typeID": 2, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 1101, "from": 0, "to": 11}, {"id": 1102, "from": 11, "to": 15}] 
  },
  {"logID": 12, "logName": "Log-12", "center": "Omaha",   "typeID": 3, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 1201, "from": 0, "to": 12}, {"id": 1202, "from": 12, "to": 12}, {"id": 1203, "from": 12, "to": 23}] 
  },
  {"logID": 13, "logName": "Log-13", "center": "Waldorf", "typeID": 1, "logType": "HardstandLog", "active": true,
   "GEP": [] 
  },
  {"logID": 14, "logName": "Log-14", "center": "Waldorf", "typeID": 4, "logType": "SatstarLog", "active": true,
   "GEP": [{"id": 1401, "from": 0, "to": 14}, {"id": 1402, "from": 14, "to": 23}] 
  },
  {"logID": 15, "logName": "Log-15", "center": "Omaha",   "typeID": 5, "logType": "SatstarLog", "active": true,
   "GEP": [{"id": 1501, "from": 0, "to": 15}] 
  },
  {"logID": 16, "logName": "Log-16", "center": "Omaha",   "typeID": 2, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 17, "logName": "Log-17", "center": "Waldorf", "typeID": 3, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 18, "logName": "Log-18", "center": "Omaha",   "typeID": 1, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 19, "logName": "Log-19", "center": "Waldorf", "typeID": 4, "logType": "HardstandLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  },
  {"logID": 20, "logName": "Log-20", "center": "Omaha",   "typeID": 5, "logType": "FlightLog", "active": true,
   "GEP": [{"id": 101, "from": 0, "to": 12}, {"id": 101, "from": 0, "to": 12}] 
  }
];

const CONSTANT_LOG_DATA2 = [
  {"logID": 11, "logName": "Log-11", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 12, "logName": "Log-12", "center": "Omaha",   "typeID": 3, "type": "Nightwatch Hardstand"},
  {"logID": 13, "logName": "Log-13", "center": "Waldorf", "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 14, "logName": "Log-14", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 15, "logName": "Log-15", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 16, "logName": "Log-16", "center": "Omaha",   "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 17, "logName": "Log-17", "center": "Waldorf", "typeID": 3, "type": "Nightwatch Hardstand",},
  {"logID": 18, "logName": "Log-18", "center": "Omaha",   "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 19, "logName": "Log-19", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 20, "logName": "Log-20", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 21, "logName": "Log-21", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 22, "logName": "Log-22", "center": "Waldorf", "typeID": 3, "type": "Nightwatch Hardstand"},
  {"logID": 23, "logName": "Log-23", "center": "Waldorf", "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 24, "logName": "Log-24", "center": "Waldorf", "typeID": 4, "type": "Waldorf SATSTAR"},
  {"logID": 25, "logName": "Log-25", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 26, "logName": "Log-26", "center": "Omaha",   "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 27, "logName": "Log-27", "center": "Waldorf", "typeID": 2, "type": "Nightwatch Flight"},
  {"logID": 28, "logName": "Log-28", "center": "Omaha",   "typeID": 1, "type": "Looking Glass Flight"},
  {"logID": 29, "logName": "Log-29", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},
  {"logID": 30, "logName": "Log-30", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"},  
  {"logID": 31, "logName": "Log-31", "center": "Omaha",   "typeID": 5, "type": "Omaha SATSTAR"}
];