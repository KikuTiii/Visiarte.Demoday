import styles from "./TodaParte.module.css";

function TodaParte() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.titulo}>
                    <h1>A arte esta por toda a parte</h1>
                    <p>
                        conecte-se ao <text>artista</text> dentro de você
                    </p>
                </div>
                <div className={styles.fotos}>
                    <div className={styles.imgDireita}>
                        <div className={styles.imgCima} />
                    </div>

                    <div className={styles.imgEsquerda}>
                        <div className={styles.imgBaixo} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default TodaParte;
