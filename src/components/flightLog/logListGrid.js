import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {Grid, Row, Col, Button, Checkbox} from 'react-bootstrap';

import * as SizeActions  from '../../actions/travelGridActions';
import * as ListActions from '../../actions/logListActions';
import {CONSTANT_LOG_TYPE, CONSTANT_LOG_DATA} from '../../api/logMainData';
//import {LogActiveFilter} from './logActiveFilter';

const style = {
  margin: '10px 0'
};

const LogListGrid = ({actions, WaldorfSelected, OmahaSelected, logType}) => {

  const onLogListTableRowSelect = (logID) => {
    actions.listActions.getLogDataFromAPI(logID);
  };

  let logsFromAPI = CONSTANT_LOG_DATA;

  let filterWaldorf = WaldorfSelected ? 'Waldorf' : 'No';
  let filterOmaha   = OmahaSelected ? 'Omaha' : 'No';
  let filteredLogs = logsFromAPI.filter(function(e){ return ( e.center == filterWaldorf || e.center == filterOmaha ) });
  filteredLogs = filteredLogs.filter(function(e){ return ( e.logType == logType || logType == 'ALL' ) });

  return (
    <div style={style}>

        <h4>Active Logs</h4>
        <Scrollbars style={{height:200} } >
          <Grid>
            <Row className="show-grid" >
                <Col md={1}>Log ID</Col>
                <Col md={1}>Log-Name</Col>
                <Col md={2}>Type</Col>
                <Col md={2}>Center</Col>
              </Row>

              {filteredLogs.map( e => 
              <Row className="show-grid" onClick = { () => onLogListTableRowSelect(e.logID) }>
                <Col md={1}>{e.logID}</Col>
                <Col md={1}>{e.logName}</Col>
                <Col md={2}>{e.logType}</Col>
                <Col md={2}>{e.center}</Col>
              </Row>
              )} 
          </Grid>
        </Scrollbars>
         
    </div>
  );
};

/**
 * Map the state to props.
 */
const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  //actions: bindActionCreators(Actions, dispatch)
  actions: { sizeActions: bindActionCreators(SizeActions, dispatch), listActions: bindActionCreators(ListActions, dispatch) }
});

/**
 * Connect the component to
 * the Redux Store.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogListGrid);
