// This is a Utility Function used to help streamline reducers
// It is not required but showcases how one could work

const updateState = (oldState, updateObject) =>{
    return {
        ...oldState,
        ...updateObject
    }
}

export default updateState;
