"use client"

import styles from './QuizComponent.module.css';
import Team from './Team';
import MatchDetails from './MatchDetails';
import data from "../data"
import { useState } from 'react';

const match = data[0]
const options = ["1", "2", "3", "4"]

function QuizComponent() {
    const [userChoice, setUserChoice] = useState("Selecione um placar")

    const choices = options.map(choice => (
        <div 
            className={`${styles.choicesGridItem}`} 
            key={choice}
            onClick={() => {setUserChoice(choice)}}
        >
            { choice }
        </div>
    ))

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

        <h1>{userChoice}</h1>

        <div className={`${styles.choicesGrid}`}>
            { choices }
        </div>
    </>
    );
}

export default QuizComponent;