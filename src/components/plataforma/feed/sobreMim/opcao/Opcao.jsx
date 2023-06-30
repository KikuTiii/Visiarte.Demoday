import React from "react";
import styles from "./Opcao.module.css";
import cadeado from "../../../../../img/cadeado.png";
import { Link } from "react-router-dom";

const Opcao = ({ nome, link }) => {
    return (
        <Link to={link}>
            <div className={styles.opcao}>
                <div className={styles.op}>
                    <span>{nome}</span>
                    <img src={cadeado} alt="" />
                </div>
            </div>
        </Link>
    );
};

export default Opcao;
