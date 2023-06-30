import React from "react";
import { Link } from "react-router-dom";
import Pessoa from "./pessoa/Pessoa";
import styles from "./Pessoas.module.css";

const Pessoas = ({ userAtivo }) => {
    return (
        <div className={styles.containerPessoas}>
            <div className={styles.logado}> mochileiro </div>
            <div className={styles.pessoas}>
                <Link to={`/chat/Vinicius Ribeiro Castro`}>
                    <Pessoa
                        nome="Vinicius Ribeiro Castro"
                        userAtivo={userAtivo}
                    />
                </Link>

                <Link to={`/chat/Marcos Silva Castro`}>
                    <Pessoa nome="Marcos Silva Castro" userAtivo={userAtivo} />
                </Link>

                <Link to={`/chat/beltrano3`}>
                    <Pessoa nome="Alex Rocha castro" userAtivo={userAtivo} />
                </Link>
            </div>
        </div>
    );
};

export default Pessoas;
