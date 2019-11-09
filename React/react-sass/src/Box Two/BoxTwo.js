import React from "react";
import styles from "./BoxTwo.module.scss";

const BoxTwo = (props) =>{
    let text = "Magic";
    let textArray = text.split("");

    return(
        <div className={styles.magic}>
            <h2 className={styles.subtitle}>SASS!</h2>
            <section className={styles.letterGrid}>
                {textArray.map((item, index)=>(
                    <div className={styles.box} key={index + "123"}>
                        {item}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default BoxTwo;