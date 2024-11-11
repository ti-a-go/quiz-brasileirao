import styles from "./Choices.module.css";


interface Props {
    choices: string[]
}

function Choices(props: Props) {
    return (
        <div className={`${styles.choicesGrid}`}>
            <div className={`${styles.choicesGridItem}`}>{ props.choices[0] }</div>
            <div className={`${styles.choicesGridItem}`}>{ props.choices[1] }</div>
            <div className={`${styles.choicesGridItem}`}>{ props.choices[2] }</div>
            <div className={`${styles.choicesGridItem}`}>{ props.choices[3] }</div>
        </div>
    )
}

export default Choices;