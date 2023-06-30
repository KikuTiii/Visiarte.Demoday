import React from "react";
import styles from "./Pessoa.module.css";

const Pessoa = ({ nome, userAtivo }) => {
    let ativo = nome === userAtivo;

    return (
        <div
            style={{
                backgroundColor: ativo && "rgba(240, 96, 36, 0.75)",
                color: ativo && "#fff",
            }}
            className={styles.pessoa}
        >
            <img
                src="https://images.pexels.com/photos/14681410/pexels-photo-14681410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            {nome}
        </div>
    );
};

export default Pessoa;
