import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';

import {Panel, Grid, Row, Col, Button, Checkbox} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import LogEditNew from './logEditNew';

const LogListTable = ({actions, WaldorfSelected, OmahaSelected, logType, logID, toLoadLogsFromAPI, logsFromAPI, newLogModalIsOpen}) => {

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

  const openNewLogModal = () => {
      actions.listActions.setNewLogModal(true);
  };  

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Data and Default
  ////////////////////////////////////////////////////////////////////////////////////////////////

  //let logTypes = CONSTANT_LOG_TYPE;

  // create filtered subset from  logsFromAPI
  let filterWaldorf = WaldorfSelected ? 'Waldorf' : 'No';
  let filterOmaha   = OmahaSelected ? 'Omaha' : 'No';
  let filteredLogs = logsFromAPI.filter(function(e){ return ( e.center == filterWaldorf || e.center == filterOmaha ) });
  filteredLogs = filteredLogs.filter(function(e){ return ( e.logType == logType || logType == 'ALL' ) });

  // load logs to state logsFromAPI from API calling on the first time component loading 
  if ( toLoadLogsFromAPI ) {
    actions.listActions.getLogsFromAPI();
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // Components
  ////////////////////////////////////////////////////////////////////////////////////////////////
 
  const LogListTable = () => {

    const tableConfiguration = {
      sizePerPageList: [{ text:  '5', value: 5 }, 
                        { text: '10', value: 10}, 
                        { text: '25', value: 25}, 
                        { text: 'All', value: filteredLogs.length} ], 
      sizePerPage: 5,  //default page size
      paginationShowsTotal: renderShowsTotal,
      paginationPosition: 'top'
    };

    const selectRowProperty = {
      mode: 'radio',
      hideSelectColumn: true,  // enable hide selection column (the radio column).
      clickToSelect: true,
      onSelect: onLogListTableRowSelect,  // invoke the onClick envent: onLogListTableRowSelect()
      selected: [ logID ],  // default selected item(s). The number is isKey value
      bgColor: 'yellow',       // selected row color
      paginationSize: 5  // the pagination bar size.
    };

    return (
          <BootstrapTable 
                data={filteredLogs} 
                options={tableConfiguration}
                condensed hover //striped 
                height='200' 
                scrollTop={ 'Bottom' }
                headerStyle={ { background: '#84b7b7' } }
                pagination ={ true } 
                selectRow={ selectRowProperty } 

                containerStyle={ { // border: '#FFBB73 2.5px solid' 
                                   // background: '#ffdbbe' 
                               } }
                tableStyle={ { //border: '#0000FF 2.5px solid', 
                               background: '	#d7dde1' 
                           } }
                bordered={ true }    // table body border
                >

                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='id' isKey>Log ID</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='logType'>Log Type</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='center'>Center</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='99px' dataSort={true} dataField='mission'>Mission</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='customerIdentifier'>Tail/Mission No.</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='99px' dataSort={true} dataField='title'>Title</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='startDate'>Start Date</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' width='50px' dataSort={true} dataField='startTime'>Start Time</TableHeaderColumn>
          </BootstrapTable>
    );
  };
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // render components
  ////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
        <LogListTable />
        <LogEditNew />
        <br />
        <Button bsStyle="primary" bsSize="small" onClick={openNewLogModal}>New Log</Button>
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
)(LogListTable);
