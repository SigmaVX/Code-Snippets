import * as actionType from "../actions/actionTypes";
import updateState from "./utilities.js";

const initialState = {
    results: []
}

// Example utility function to keep switch case lean
const deleteItem = (state, action) => {
    // Alt Method Using Splice For Updating Array Immutably
    // const id = 2;
    // const newArray = [...state.results];
    // newArray.splice(id, 1);
    const updatedArray = state.results.filter((result)=> result.id !== action.id);
    return updateState(state, {results: updatedArray});

}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case(actionType.STORE_RESULT):
             return updateState(state, {results: state.results.concat({id: new Date(), value: action.result})});   
        case(actionType.REMOVE_RESULT):
            return deleteItem(state, action)
        default: 
            return state;
    }
};

export default reducer; 