import React from "react";

const ValidationComponent = (props) =>{
    return (
        <div>
            {props.message}...
            {props.length>5 ? "Text Is Too Long" : "Text Is Too Short"}
        </div>
    )
}

export default ValidationComponent;