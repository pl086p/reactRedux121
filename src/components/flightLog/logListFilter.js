import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';

import {Panel, Grid, Row, Col, Button, Checkbox} from 'react-bootstrap';

import {CONSTANT_LOG_TYPE} from '../../api/logMainData';

const LogListFilter = ({actions, WaldorfSelected, OmahaSelected, logType, logTypeID, logID}) => {
  
  const handleCenterCheckbox = (e) => {
    let target = e.target;
    let targetName   = target.name;

    if (targetName == 'WALDORF' ) { 
        actions.listActions.setLogsFilter({
            WaldorfSelected: target.checked,
            OmahaSelected,
            logType,
            logTypeID 
        });
    };

    if (targetName == 'OMAHA' ) { 
        actions.listActions.setLogsFilter({
            WaldorfSelected,
            OmahaSelected: target.checked,
            logType,
            logTypeID 
        });
    };

  };

  const handleLogTypeChange = (e) => {
    actions.listActions.setLogsFilter({
      WaldorfSelected,
      OmahaSelected,
      logType: e.target.value //logTypeID: parseInt(e.target.value)
    });

  };

  const logTypes = CONSTANT_LOG_TYPE;

  return (
        
      <Panel >
        <Grid>
          <Row className="show-grid">
            <Col md={2}>
              Logs for Center:
            </Col> 
            <Col md={1}>
                <label>Waldorf: 
                  <input type="checkbox" name="WALDORF" checked={WaldorfSelected} onChange = {handleCenterCheckbox} />
                </label>
            </Col>
            <Col md={1}>
                <label>Omaha: 
                  <input type="checkbox" name="OMAHA"   checked={OmahaSelected}   onChange = {handleCenterCheckbox} />
                </label>                
              </Col>
              <Col md={8}></Col>
          </Row>

          <Row className="show-grid">
            <Col md={2}>
              Log Type: 
            </Col>
            <Col md={2}>
              <select value={logType} onChange={handleLogTypeChange}>
                {logTypes.map( t => <option value={t.LogType} >{t.ID} - {t.Label}</option> )} 
              </select>
            </Col>
            <Col md={8}></Col>
          </Row>
        </Grid>
      </Panel>
  )
};

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
)(LogListFilter);



