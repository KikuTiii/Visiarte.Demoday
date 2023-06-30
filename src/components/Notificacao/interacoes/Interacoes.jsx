import styles from "./Interacoes.module.css";
import React from "react";

function Interacao() {
    return (
        <section className={styles.intComp}>
            <div className={styles.containerDivImg}>
                <div className={styles.divImg}>{/* img */}</div>
            </div>
            <div className={styles.divNome}>
                <h1 className={styles.nome}>nome da pessoa</h1>
            </div>
            <div className={styles.divConteudo}>
                <p className={styles.conteudo}>eveveve</p>
            </div>
        </section>
    );
}

export default Interacao;
