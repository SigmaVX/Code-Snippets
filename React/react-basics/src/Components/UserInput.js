import React from "react";

const Style = {
    "height": "30px",
    "width": "50%",
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "20px",
    "padding": "10px",
    "fontSize": "20px",
    "background": "#333",
    "color": "#fff",
    "borderRadius": "10px"
};

const UserInput = (props) => {
    return(
        <input
            type="text"
            style={Style}
            onChange={props.update}
            placeholder="Type Here To Change Top Section Username"
        >
        </input>
    )
};

export default UserInput;