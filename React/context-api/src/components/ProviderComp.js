import React, {Component} from "react";
import UserInfo from "./ContextData";

class ProviderComp extends Component{
    
    state={
        name: "Gary",
        age: 20,
        color: "Red",
        changeMind: ()=>{
            if(this.state.color === "Red"){
                document.getElementById("root").style.background="blue";
                document.getElementById("root").style.color="white";
                this.setState({
                    name: "Tony",
                    age: 35,
                    color: "Blue"
                })
            }
            if(this.state.color === "Blue"){
                document.getElementById("root").style.background="red";
                document.getElementById("root").style.color="black";
                this.setState({
                    name: "Gary",
                    age: 20,
                    color: "Red"
                })
            }
        }
    }

    render(){
        return(
            <UserInfo.Provider value={{state:this.state}}>
                {this.props.children}
            </UserInfo.Provider>
        )
    }
}

export default ProviderComp;
