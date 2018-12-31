import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state={
        name: "",
        age: ""
    }

    nameChangeHandler = (event) =>{
        event.preventDefault();
        this.setState({name: event.target.value})
    }

    ageChangeHandler = (event) =>{
        event.preventDefault();
        this.setState({age: event.target.value})
    }

    render(){
        return(
        
            <div className="AddPerson">
                <input placeholder="Name" type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
                <input placeholder="Age" type="number" value={this.state.age} onChange={this.ageChangeHandler}/>
                <button onClick={()=>this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;