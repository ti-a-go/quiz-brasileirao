import styles from "./MatchDetails.module.css";


interface Props {
    round: string
    date: string
    time: string
}

function MatchDetails(props: Props) {
    return (
        <div>
            <p className={`${styles.round}`}>{ `${props.round}ª Rodada` }</p>
            <p className={`${styles.round}`}>{ props.date } / { props.time }</p>
        </div>
    );
}

export default MatchDetails;