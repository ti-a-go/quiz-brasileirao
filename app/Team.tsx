import styles from "./Team.module.css";
import Image from "next/image"

export interface Props {
    name: string;
    score: string;
    logo: string;
}

function Team(props: Props) {
    return (
        <div className={`${styles.homeTeam}`}>
            <div className={`${styles.imageContainer}`}>
                <Image
                    src={ props.logo }
                    alt={"Logo " + props.name}
                    width={256}
                    height={256}
                />
            </div>
            <p className={`${styles.teamName}`}>{ props.name }</p>
            <div>
                <p className={`${styles.teamScore}`}>{ props.score }</p>
            </div>
        </div>
    )
    
}

export default Team;