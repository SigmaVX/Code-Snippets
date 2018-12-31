// This file is not used but shows how you can have multiple items in 
// One file rather than splitting your reducer into multiple files.

import * as actionType from "./actions";

const initialState = {
    counter: 0,
    results: []

}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case(actionType.INCREMENT):
            return {
                ...state,
                counter: state.counter + 1
            }
        case(actionType.DECREMENT):
            return {
                ...state,
                counter: state.counter - 1
            }
        case(actionType.ADD_FIVE):
            return {
                ...state,
                counter: state.counter + action.value
            }
        case(actionType.SUBTRACT_FIVE):
             return {
                ...state,
                counter: state.counter - action.value
             }
        case(actionType.STORE_RESULT):
             return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
             }
        case(actionType.REMOVE_RESULT):
            // Alt Method Using Splice For Updating Array Immutably
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter((result)=> result.id !== action.id)
            return {
                 ...state,
                 results: updatedArray
            }
    }

    // This is the backup in the event a case is not found
    // It returns the current state
    return state;
};

export default reducer; 