import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionType from "../../store/actions";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
        return (
            <div>
                <CounterOutput value={this.props.count} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveCounter}  />
                <hr/>
                <button onClick={()=>this.props.storeResult(this.props.count)}>Store Result</button>
                <h2>Stored Results</h2>
                <p>(Click A Result To Remove)</p>
                <ul>
                    {console.log(this.props.storedResults)}
                    {this.props.storedResults.map((result)=>{
                        return <li key={result.id} onClick={()=>this.props.removeResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    // Note the use of ctr and res to access state since we are using multiple
    // Reducers that are merged with combineReducers in Redux
    return {
        count: state.ctr.counter,
        storedResults: state.res.results 
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onIncrementCounter: ()=>dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: ()=>dispatch({type: actionType.DECREMENT}),
        onAddFiveCounter: ()=>dispatch({type: actionType.ADD_FIVE, value: 5}),
        onSubtractFiveCounter: ()=>dispatch({type: actionType.SUBTRACT_FIVE, value: 5}),
        storeResult: (result)=>{console.log("clicked"); return dispatch({type: actionType.STORE_RESULT, result:result})},
        removeResult: (id)=>dispatch({type: actionType.REMOVE_RESULT, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);