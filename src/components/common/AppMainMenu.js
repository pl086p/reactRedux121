import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

export const AppMainMenu = () => (
<div>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="active"><IndexLink activeClassName='active' to='/home'>Home</IndexLink></li>
                <li className="active"><IndexLink activeClassName='active' to='/timeTravel'>Time Travel</IndexLink></li>
                <li className="active"><IndexLink activeClassName='active' to='/flightlog'>Flight Logs</IndexLink></li>
            </ul>
        </div>
    </nav>
</div>
); 


