import * as actionType from "../actions";

const initialState = {
    results: []
}

const reducer = (state = initialState, action) =>{

    switch(action.type){
        case(actionType.STORE_RESULT):
             return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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