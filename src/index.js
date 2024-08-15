/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Ensure this path is correct
import App from './Components/App'; // Adjust if the App component path is different

ReactDOM.render(
  <Provider store={store}> {/* Provide the Redux store *//*}
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();*/


/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Corrected path
import App from './Components/App'; // Correct path
ReactDOM.render(
  <Provider store={store}> 
  <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals(); */

//3

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Ensure this path is correct and the file exists
import App from './App'; // Ensure this path is correct and the file exists
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

