import * as actionType from "../actions";

const initialState = {
    counter: 0
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
        
    }

    // This is the backup in the event a case is not found
    // It returns the current state
    return state;
};

export default reducer; 