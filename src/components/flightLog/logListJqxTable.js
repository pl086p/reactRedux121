import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';

import JqxGrid from '../../lib/jqwidgets-react//react_jqxgrid.js';

const LogListJqxTable = ({actions, WaldorfSelected, OmahaSelected, logType, logID, toLoadLogsFromAPI, logsFromAPI, newLogModalIsOpen}) => {

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // events
  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleLogSelect = (logID) => {
    actions.listActions.getLogDataFromAPI(logID);
  };

  const onLogListTableRowSelect = (row, isSelected, e) => {
    //console.log(JSON.stringify(row));
    actions.listActions.getLogDataFromAPI(row.id);
  };

  const renderShowsTotal = (start, to, total) => {
        return (
          <p style={ { color: 'blue' } }>
            Log { start } - { to } ( Total: { total })
          </p>
        );
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Data and Default
  ////////////////////////////////////////////////////////////////////////////////////////////////

    let data = logsFromAPI;

    let source =
    {
        datatype: "json",
        localdata: data,
        datafields: [
            { name: 'id', type: 'int'},
            { name: 'logType', type: 'string' },
            { name: 'center', type: 'string' },
            { name: 'mission', type: 'string' }
        ]
    };
 
    let dataAdapter = new $.jqx.dataAdapter(source);
 
    let columns =
    [
      { text: 'Log ID', datafield: 'id', width: 50 },
      { text: 'Log Type', datafield: 'logType', width: 100 },
      { text: 'center',   datafield: 'center', width: 200 },
      { text: 'mission',  datafield: 'mission', width: 200 }
    ];
 
   
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // render components
  ////////////////////////////////////////////////////////////////////////////////////////////////

  return (
      <div>
        lst data begin  
        <JqxGrid width={850} source={dataAdapter} pageable={true}
             sortable={true} altrows={true} enabletooltips={true}
             autoheight={true} editable={true} columns={columns}
        />
        list data end
      </div>
  );
};

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // mapping state and action
  ////////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(Actions, dispatch)
  actions: { editActions: bindActionCreators(EditActions, dispatch), 
             listActions: bindActionCreators(ListActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogListJqxTable);
