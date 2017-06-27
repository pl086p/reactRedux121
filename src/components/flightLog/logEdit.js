import React from 'react';
import ReactDOM from 'react-dom';
import {Panel, Grid, Row, Col, Button, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';

import {ApiByRequest} from '../../api/ApiByRequest';

//import LogEditForm1 from './logEditForm1';
//import LogEditForm2 from './logEditForm2';
//import LogEditForm3 from './logEditForm3';
//import LogEditForm4 from './logEditForm4';
//import LogEditForm5 from './logEditForm5';

const LogEdit = ({logID, logData, actions}) => {

    let  detailPanel = null;
    let logForm = logID;
    

    /*
    if ( logForm == 11) { detailPanel = '<LogEditForm1 selectedLog = {this.props.selectedLog} />;' }; 
    if ( logForm == 12) { detailPanel = '<LogEditForm2 selectedLog = {this.props.selectedLog} />;' }; 
    if ( logForm == 13) { detailPanel = '<LogEditForm3 selectedLog = {this.props.selectedLog} />;' }; 
    if ( logForm == 14) { detailPanel = '<LogEditForm4 selectedLog = {this.props.selectedLog} />;' }; 
    if ( logForm == 15) { detailPanel = '<LogEditForm5 selectedLog = {this.props.selectedLog} />;' }; 
    */

    //////////////////////////////////////////////////////////////////////////////
    // for temp test only
    let test = null;
    function myCallback(result) {
      test = result;
      //console.log('32==' + JSON.stringify(result));
    }

    function getData(callback) {

      $.get('http://localhost:8042/cats/3').then(res => { 
        callback(res); 
      });

    }

    getData( myCallback );
    
    //////////////////////////////////////////////////////////////////////////////
    const handleSaveButton = () => {
      actions.editActions.saveLog(2, 3);
    };

    const handleCloneButton = () => {
      actions.editActions.cloneLog(4, 5);
    };

    return (
        <div>  
               <h4>Log Detail (state.logData): </h4><br />
               <br />id: {logData.id}
               <br />title: <input type="text" name="title" value={logData.title} />
               <br />logType: {logData.logType}
               <br />logForm: <input type="text" name="logForm" value={logData.logForm} />
               <br /><Button bsStyle="primary" bsSize="small" onClick = { () => handleSaveButton() } >Save Log</Button>
                     <Button bsStyle="primary" bsSize="small" onClick = { () => handleCloneButton() } >Clone Log</Button>
        </div>
    );

};

const mapStateToProps = (state) => ({
  ...state
});

//const mapStateToProps = (state) => {
//  return {myEdit: state.logEditReducer.myEdit}
//};

const mapDispatchToProps = (dispatch) => ({
  actions: { editActions: bindActionCreators(EditActions, dispatch), listActions: bindActionCreators(ListActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogEdit);

