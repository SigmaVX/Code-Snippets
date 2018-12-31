import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/Reducers/counter";
import resultsReducer from "./store/Reducers/results";

import {Provider} from "react-redux";


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

const store = createStore(rootReducer);  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
