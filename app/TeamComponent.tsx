import styles from "./TeamComponent.module.css";
import Image from "next/image"

export interface Props {
    teamName: string;
    teamScore: string;
    teamLogoPath: string;
}

function TeamComponent(props: Props) {
    return (
        <div className={`${styles.homeTeam}`}>
            <div className={`${styles.imageContainer}`}>
                <Image
                    src={ props.teamLogoPath }
                    alt={"Logo " + props.teamName}
                    width={256}
                    height={256}
                />
            </div>
            <p className={`${styles.teamName}`}>{ props.teamName }</p>
            <div>
                <p className={`${styles.teamScore}`}>{ props.teamScore }</p>
            </div>
        </div>
    )
    
}

export default TeamComponent;