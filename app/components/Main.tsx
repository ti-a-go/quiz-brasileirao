import styles from './Main.module.css';
import Team from './Team';
import MatchDetails from './MatchDetails';
import data from "../data"
import Choices from './Choices';


const match = data[0]
const choices = ["1", "2", "3", "4"]

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

        <Choices
            choices={choices}
        />
    </>
    );
}

export default Main;