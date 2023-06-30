import React from "react";
import { Link } from "react-router-dom";
import Opcao from "./opcao/Opcao";
import styles from "./SobreMim.module.css";

function SobreMim({ data }) {
    return (
        <div className={styles.containerSobreMim}>
            <Link to={`/usuario/${data.username}`}>
                <div className={styles.sobreMim}>
                    <img src={data.foto_capa_usuario} alt="" />
                    <div>
                        <img
                            src={data.foto_perfil}
                            alt=""
                            className={styles.foto_perfil}
                        />
                        <h4>{data.username}</h4>
                        <p>{data.bio}</p>
                    </div>
                </div>
            </Link>

            <div className={styles.borda}></div>
            <div className={styles.opcoes}>
                <Opcao nome="Cursos" link="/feed" />
                <Opcao nome="Freelance" link="/feed" />
                <div className={styles.borda}></div>
                <Opcao nome="Cursos" link="/feed" />
                <Opcao nome="Cursos" link="/feed" />
            </div>
        </div>
    );
}

export default SobreMim;
