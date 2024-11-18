import styles from "./Choices.module.css";
import { useEffect } from "react";

interface Props {
    choices: string[]
    setChoice: Function
}

function Choices(props: Props) {
    
    const choices = props.choices.map(choice => (
        <div 
            className={`${styles.choicesGridItem}`} 
            key={choice}
            onClick={props.setChoice(choice)}
        >
            { choice }
        </div>
    ))

    return (
        <div className={`${styles.choicesGrid}`}>
            { choices }
        </div>
    )
}

export default Choices;