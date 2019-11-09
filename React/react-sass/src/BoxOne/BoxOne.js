import React from "react";
import styles from "./BoxOne.scss";

const BoxOne = (props) =>{
    let text = "Vudoo";
    let textArray = text.split("");

    return(
        <div className={"vudoo"}>
            <h2 className={"subtitle"}>SASS!</h2>
            <section className="letterGrid">
                {textArray.map((item, index)=>(
                    <div className={"box"} key={index + "abc"}>
                        {item}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default BoxOne;