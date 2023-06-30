import React from "react";
import styles from "./Sugestoes.module.css";
import Sugestao from "./sugestao/Sugestao";
import { Link } from "react-router-dom";

function Sugestoes({ data }) {
    return (
        <div className={styles.sugestoes}>
            <h5>Descubra novos perfis</h5>
            <div className={styles.sugestao}>
                {data.map((user) => (
                    <Link
                        to={`/usuario/${user.username}`}
                        key={user.id_usuario}
                    >
                        <Sugestao
                            img={user.foto_perfil}
                            nome={user.name}
                            username={user.username}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sugestoes;
