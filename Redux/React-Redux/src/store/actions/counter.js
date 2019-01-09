import * as actionTypes from "./actionTypes"; 

// Action Creators
export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return{
        type: actionTypes.DECREMENT
    }
}

export const addFive = (value) => {
    return{
        type: actionTypes.ADD_FIVE,
        value: value
    }
}

export const subtractFive = (value) => {
    return{
        type: actionTypes.SUBTRACT_FIVE,
        value: value
    }
}
