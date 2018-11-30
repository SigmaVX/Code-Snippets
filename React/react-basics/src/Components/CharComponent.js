import React from "react";

const Style = {
    "display": "inline-block",
    "padding": "16px",
    "margin": "16px",
    "textAlign": "center",
    "fontSize": "20px",
    "background": "#000",
    "color": "#fff",
    "borderRadius": "10px",
    "border": "3px solid gold"

};

const CharComponent = (props) => {
    return(
            <div 
                style={Style}
                className="char-box"
                key={props.id}
                onClick={props.remove}
            >
                {props.letter}
            </div>
        )
    };


export default CharComponent;