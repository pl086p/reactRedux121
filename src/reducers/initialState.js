const initialState = {
    //logList: 

        WaldorfSelected: true,
        OmahaSelected: true,
        logTypeID: 0, 
        logType: 'ALL',
        toLoadLogsFromAPI: true,
        logsFromAPI: [],
        logID: 0, //null,
        logData: {},
        requestLogsURL: '',
        requestLogURL: '',
        lastUpdated: '',
        newLogModalIsOpen: false,

    //logEdit: 
        myEdit: 'default',

    // travel 10*10
        width: 10,
        height: 10,
        cells: [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,            
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,            
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 1
        ]

};

export default initialState;
