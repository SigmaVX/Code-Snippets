import * as actionType from "../actions/actionTypes";
import updateState from "./utilities";

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) =>{

    // This uses a utility funcion - an alt version is below
    switch(action.type){
        case(actionType.INCREMENT):
            return updateState(state, {counter: state.counter + 1})
        case(actionType.DECREMENT):
            return updateState(state, {counter: state.counter - 1})
        case(actionType.ADD_FIVE):
            return updateState(state, {counter: state.counter + action.value})
        case(actionType.SUBTRACT_FIVE):
            return updateState(state, {counter: state.counter - action.value})
        default:
            return state;
        
    }
};

export default reducer; 


// Alternitive Way To Set Up Switch W/O Utility Function
// switch(action.type){
//     case(actionType.INCREMENT):
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     case(actionType.DECREMENT):
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     case(actionType.ADD_FIVE):
//         return {
//             ...state,
//             counter: state.counter + action.value
//         }
//     case(actionType.SUBTRACT_FIVE):
//          return {
//             ...state,
//             counter: state.counter - action.value
//          }
// }