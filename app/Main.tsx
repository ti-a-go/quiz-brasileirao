import styles from './Main.module.css';
import Image from "next/image"

function Main() {
    return (<>
        <div>
            <p className={`${styles.round}`}>3ª Rodada</p>
            <p className={`${styles.round}`}>12/0/2020</p>
        </div>
        <div className={`${styles.gridContainer}`}>
            <div className={`${styles.gridItem}`}>
                <div className={`${styles.homeTeam}`}>
                    <div className={`${styles.imageContainer}`}>
                        <Image
                            src="https://logodetimes.com/times/bahia/logo-bahia-256.png"
                            alt="Logo Bahia"
                            width={256}
                            height={256}
                        />
                    </div>
                    <p className={`${styles.teamName}`}>Bahia</p>
                    <div>
                        <p className={`${styles.teamScore}`}>2</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.gridItem}`}>
                <p className={`${styles.x}`}>X</p>
            </div>
            <div className={`${styles.gridItem}`}>
                <div className={`${styles.awayTeam}`}>
                    <div className={`${styles.imageContainer}`}>

                        <Image
                            src="https://logodetimes.com/times/vitoria/logo-vitoria-256.png"
                            alt="Logo Vitória"
                            width={256}
                            height={256}
                        />
                    </div>
                    <p className={`${styles.teamName}`}>Vitória</p>
                    <div className={`${styles.teamScore}`}>?</div>
                </div>
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