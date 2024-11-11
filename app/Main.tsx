import styles from './Main.module.css';
import Image from "next/image"
import TeamComponent from './TeamComponent';


function Main() {
    return (<>
        <div>
            <p className={`${styles.round}`}>3ª Rodada</p>
            <p className={`${styles.round}`}>12/0/2020</p>
        </div>

        <div className={`${styles.gridContainer}`}>
            <div className={`${styles.gridItem}`}>

                <TeamComponent
                    teamLogoPath="https://logodetimes.com/times/bahia/logo-bahia-256.png"
                    teamName="Bahia"
                    teamScore="2"
                    key={1}
                />
            
            </div>

            <div className={`${styles.gridItem}`}>
                <p className={`${styles.x}`}>X</p>
            </div>
            
            <div className={`${styles.gridItem}`}>

                <TeamComponent
                    teamLogoPath="https://logodetimes.com/times/vitoria/logo-vitoria-256.png"
                    teamName="Vitória"
                    teamScore="?"
                    key={2}
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