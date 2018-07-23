import React, {Component} from "react";
import UserInfo from "./ContextData";


class ConsumerComp extends Component{
    
    render(){
        return(
            <UserInfo.Consumer>
                {(context)=>(
                    <React.Fragment>
                        <p>My Name Is: {context.state.name}</p>
                        <p>My Age Is: {context.state.age}</p>
                        <p>My Favorite Color Is: {context.state.color}</p>
                        <button onClick={context.state.changeMind}>Changed My Mind</button>
                    </React.Fragment>
                )}
            </UserInfo.Consumer>
        )
    }
}

export default ConsumerComp;