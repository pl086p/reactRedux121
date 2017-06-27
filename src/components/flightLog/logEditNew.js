import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EditActions from '../../actions/logEditActions';
import * as ListActions from '../../actions/logListActions';


const LogEditNew = ({actions, newLogModalIsOpen}) => {

    const closeNewLogModal = () => {
        console.log('closeNewLogModal');
        actions.listActions.setNewLogModal(false);
    };

    return (
        <div>
        
        <Modal show={newLogModalIsOpen} onHide={closeNewLogModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Log</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>New Log Body</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeNewLogModal}>Close</Button>
          </Modal.Footer>
        </Modal>
        
        </div>
    );

};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  actions: { editActions: bindActionCreators(EditActions, dispatch), listActions: bindActionCreators(ListActions, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogEditNew);

