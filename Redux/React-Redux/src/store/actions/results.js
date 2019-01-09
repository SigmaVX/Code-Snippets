import * as actionTypes from "./actionTypes";

// This is the syncronus code that runs when dispacted by storeResult
export const saveResult = (result) =>{
    return{
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    // Returns a function to run code async using redux-thunk
    return (dispatch, getState) => {
        // Timer created as a proxy for a server
        setTimeout(()=>{
            // getState is access with a method and dot notation for nodes
            const oldState = getState().ctr.counter;
            console.log("Old State: ", oldState);
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const removeResult = (id) => {
    return{
        type: actionTypes.REMOVE_RESULT,
        id: id
    }
}