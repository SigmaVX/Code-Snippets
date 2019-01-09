import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./store/Reducers/counter";
import resultsReducer from "./store/Reducers/results";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Combines multiple reducers into one for the store
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

// Middleware to log actions to console
const logger = (store) => {
    // next is a param for an anonymous function 
    return (next) =>{  
        console.log("What Is Next? ", next );
        // this is a Closure and allows the innermost function to access outer vars 
        return (action) =>{
            console.log("[Logger] Dispatching: ", action)
            // next is a method that passes the action to the reducer
            const result = next(action);
            // log the state
            console.log("[Logger] Next State: ", store.getState())
            return result;
        }
    }
};

// Added to support Chrome Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
