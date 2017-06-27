import React from 'react';

import { Panel, Form, Col, FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button } from 'react-bootstrap';
import { Well, Tabs, Tab } from 'react-bootstrap';

import JqxTree     from '../../lib/jqwidgets-react/react_jqxtree.js';
import JqxSplitter from '../../lib/jqwidgets-react/react_jqxsplitter.js';
import JqxExpander from '../../lib/jqwidgets-react/react_jqxexpander.js';
import JqxListBox  from '../../lib/jqwidgets-react/react_jqxlistbox.js';
import JqxPanel    from '../../lib/jqwidgets-react/react_jqxpanel.js';

import LogListFilter from './logListFilter';
import LogListGrid   from './logListGrid';
import LogListTable  from './logListTable';
import LogListJqxTable from './logListJqxTable';
import LogEdit       from './logEdit';
import Grid    from '../timetravel/Grid'; //import LogSearch from './logSearch';

const LogMainSplitter = () => (
     <JqxSplitter 
          width={1200} height={500} orientation={'vertical'}
          panels={[{ size: 400, min: 100, collapsible: true }, {min: 200, collapsible: false}]} >
          
          {/* Left Panel ============================================================ */}
          {/* tab bsStyle = tabs (default)/pills (blue button) */}
          <div>

                <Tabs defaultActiveKey={2} id="uncontrolled-tab" bsStyle="tabs" bsSize="xsmall">
                    
                    <Tab eventKey={1} title="List-Grid">
                        <LogListFilter />
                        <LogListGrid />
                    </Tab>
                    
                    <Tab eventKey={2} title="List-Table">
                        <LogListFilter />
                        <LogListTable />
                    </Tab>

                    <Tab eventKey={3} title="jqxTable">
                        <LogListFilter />
                        {/*<LogListJqxTable /> */}
                    </Tab>

                    <Tab eventKey={4} title="Travel 10*10">
                        <Grid /> {/*<LogSearch /> */}
                    </Tab>
                    
                </Tabs>              

          </div>

          {/* Right Panel =========================================================== */}
          <div>

              <LogEdit />
              
          </div>
      </JqxSplitter>    
);

export default LogMainSplitter;

