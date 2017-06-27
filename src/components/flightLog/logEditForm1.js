import React from 'react';
import ReactDOM from 'react-dom';

export default class LogEditForm1 extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {

		var log = this.props.selectedLog;

		return (
				<div>
					<h3>Looking Glass Log Edit Form</h3>
					<br />
					Log ID:  	{log.logID}<br />
					Log Name: 	{log.logName}<br />
					Log Center: {log.center}<br />
					Log Type: 	{log.type} ({log.typeID})<br />
					GEP Transitions: { JSON.stringify(log.GEP) }<br />
				</div>
		)
	}
}


