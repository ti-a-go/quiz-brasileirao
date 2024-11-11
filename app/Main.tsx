import styles from './Main.module.css';
import TeamComponent from './TeamComponent';
import MatchDetails from './MatchDetails';
import data from "./data"


const match = data[0]

function Main() {
    return (<>
        <MatchDetails
            round={`${match.round}`}
            date={match.date}
            time={match.time}
            key={1}
        />

        <div className={`${styles.gridContainer}`}>
            <div className={`${styles.gridItem}`}>

                <TeamComponent
                    teamLogoPath={ match.homeLogo }
                    teamName={ match.homeTeam }
                    teamScore={ `${match.homeScore}` }
                    key={1}
                />
            
            </div>

            <div className={`${styles.gridItem}`}>
                <p className={`${styles.x}`}>X</p>
            </div>
            
            <div className={`${styles.gridItem}`}>

                <TeamComponent
                    teamLogoPath={ match.awayLogo }
                    teamName={ match.awayTeam }
                    teamScore={ `${ match.awaySore }` }
                    key={1}
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