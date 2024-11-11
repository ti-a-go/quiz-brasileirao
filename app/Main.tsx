import styles from './Main.module.css';
import Team from './Team';
import MatchDetails from './MatchDetails';
import data from "./data"


const match = data[0]

function Main() {
    return (<>
        <MatchDetails
            round={`${match.round}`}
            date={match.date}
            time={match.time}
        />

        <div className={`${styles.gridContainer}`}>
            <div className={`${styles.gridItem}`}>
                <Team
                    logo={ match.homeLogo }
                    name={ match.homeTeam }
                    score={ `${match.homeScore}` }
                />
            </div>

            <div className={`${styles.gridItem}`}>
                <p className={`${styles.x}`}>X</p>
            </div>

            <div className={`${styles.gridItem}`}>
                <Team
                    logo={ match.awayLogo }
                    name={ match.awayTeam }
                    score={ `${ match.awaySore }` }
                />
            </div>
        </div>

        <div className={`${styles.choicesGrid}`}>
            <div className={`${styles.choicesGridItem}`}>1</div>
            <div className={`${styles.choicesGridItem}`}>2</div>
            <div className={`${styles.choicesGridItem}`}>3</div>
            <div className={`${styles.choicesGridItem}`}>4</div>
        </div>
    </>
    );
}

export default Main;