import React, { Component } from 'react';
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";
import './App.css';

class App extends Component {

  state={
    userOne: "Anthony",
    useTwo: "Jennifer",
    length: 0,
    letters: []
  }

  updateNames = (event) => {
    this.setState({
      userOne: event.target.value
    })
  }

  countInput = (event) => {
    let inputLength = event.target.value.length;
    let letterArray = event.target.value.split("");
    // console.log(letterArray);

    this.setState({
      length: inputLength,
      letters: letterArray
    })  
  }

  removeChar = (index) => {
    let copyArray = [...this.state.letters];
    copyArray.splice(index,1);
    this.setState({
      letters: copyArray
    })
  }

  render() {
    return (
      <div className="App">
        
        <section>
          <h2 className="text-center">Component Basics</h2>
          <UserInput
            update={this.updateNames}
            name={this.state.userOne}
          />
          
          <UserOutput
            username={this.state.userOne}
          />
          
          <UserOutput
            username={this.state.useTwo}
          />
        </section>


        <section>
          <h2 className="text-center">Conditional Rendering</h2>
          <input
            className="conditional-input"
            type="text"
            onChange={this.countInput}
            placeholder="Type Some Stuff"
            value={this.state.letters.join("")}
           
          />
          
          <p>
            Your Text Length Is: {this.state.length}
          </p>

          <ValidationComponent
            length={this.state.length}
            message={this.state.length>5 ? "Scan Complete" : "Scanning"}
          />

          <h3 className="text-center">My Letters</h3>

          {this.state.letters.map((item, index)=>{
            return(
              <CharComponent
                letter={item}
                key={index} 

                // Note the use of bind method - index is passed to removeChar as param
                remove={this.removeChar.bind(this,index)}
              />
            )

          })}

        </section>


      </div>
    );
  }
}

export default App;
