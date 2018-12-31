import React, { Component } from 'react';
import {connect} from "react-redux";

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = (name, age) => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: name,
            age: age
        }

        this.props.addPerson(newPerson);

        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.concat(newPerson)}
        // } );
    }

    personDeletedHandler = (personId) => {
        this.props.removePerson(personId)

        // this.setState( ( prevState ) => {
        //     return { persons: prevState.persons.filter(person => person.id !== personId)}
        // } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPerson: (person)=>dispatch({type: "ADD_PERSON", person: person}),
        removePerson: (id)=>dispatch({type: "REMOVE_PERSON", id:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);