import styles from "./Choices.module.css";


interface Props {
    choices: string[]
}

function Choices(props: Props) {
    
    const choices = props.choices.map(choice => (
        <div className={`${styles.choicesGridItem}`} key={choice}>{ choice }</div>
    ))

    return (
        <div className={`${styles.choicesGrid}`}>
            { choices }
        </div>
    )
}

export default Choices;