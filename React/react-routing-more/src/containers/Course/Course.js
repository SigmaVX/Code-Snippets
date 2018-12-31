import React, { Component } from 'react';

class Course extends Component {

    render () {
        // console.log(this.props.match.params.id)

        return (
            <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;