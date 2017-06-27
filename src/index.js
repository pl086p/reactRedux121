import React from 'react';
import {render} from 'react-dom';

/*
 * The Provider component provides
 * the React store to all its child
 * components so we don't need to pass
 * it explicitly to all the components.
 */
import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';


// import {rootReducer} from './reducers/rootReducer';  // using combineRedurers(): 
//import gridReducer from './reducers/gridReducer';       // containts all reducers
import allReducers from './reducers/allReducersIn1';       // containts all reducers
let rootReducer = allReducers;

import App from './components/App';
import DevTools from './tools/DevTools';
import initialState from './reducers/initialState';

const logger = createLogger();

/*
 * The embededDevTools/devToolsExtension are passed when
 * creating the Redux store to add some extra functionality.
 *
 * In this case we add a logger middleware that write some debug
 * information every time the state is changed.
 *
 * We also add the Redux DevTools so we can easily debug the state.
 */

/* using DevTools.instrument() whitch is embeded in browser. need <DevTools /> */
const embededDevTools = compose(
  applyMiddleware(logger),
  DevTools.instrument()
);

const seperateDevTools = compose(
  applyMiddleware(ReduxThunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

/* This creates the store so we can listen to changes and dispatch actions. */
//const store = createStore(rootReducer, initialState, embededDevTools);
const store = createStore(rootReducer, initialState, seperateDevTools);

// Using window.devToolsExtension, not need <DevTools />
//const store = createStore(rootReducer, initialState, window.devToolsExtension
//	? window.devToolsExtension() : f => f);


render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <App />
        {/* <DevTools /> */}
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

/**
 * This is for hot reloading so the
 * app updates every time the code of
 * the components change.
 */

/** I comment out this part 
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <div>
            <NextApp />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
*/