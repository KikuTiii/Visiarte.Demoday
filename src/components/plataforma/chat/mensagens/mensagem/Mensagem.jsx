import React from "react";
import styles from "./Mensagem.module.css";

const Mensagem = ({ tipo, msg }) => {
    if (tipo === 1) {
        return (
            <div className={`${styles.mensagem} ${styles.esquerda}`}>
                <img
                    src="https://images.pexels.com/photos/14681410/pexels-photo-14681410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <p>{msg}</p>
            </div>
        );
    } else {
        return (
            <div className={`${styles.mensagem} ${styles.direita}`}>
                <img
                    src="https://images.pexels.com/photos/14681410/pexels-photo-14681410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <p>{msg}</p>
            </div>
        );
    }
};

export default Mensagem;
