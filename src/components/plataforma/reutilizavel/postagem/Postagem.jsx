import React from "react";
import styles from "./Postagem.module.css";
import { Link } from "react-router-dom";
import curtir from "../../../../img/curtir.png";
import comentar from "../../../../img/comentar.png";

function Postagem({ img_perfil, nome, img_postagem, texto, id }) {
    return (
        <div className={styles.postagem}>
            <Link to={`/usuario/${nome}`}>
                <div className={styles.perfil}>
                    <img src={img_perfil} alt="" />
                    <span>{nome}</span>
                </div>
            </Link>
            <Link to={`/postagem/${id}`}>
                <p className={styles.descricao}>{texto}</p>
                {img_postagem && (
                    <img
                        src={img_postagem}
                        alt=""
                        className={styles.foto_postagem}
                    />
                )}
            </Link>
            <div className={styles.interagir}>
                <img src={curtir} alt="" className={styles.curtir} />
                <img src={comentar} alt="" className={styles.comentar} />
            </div>
            <form className={styles.digitar_comentario}>
                <input
                    type="text"
                    placeholder="Digite um comentário..."
                    required
                />
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}

export default Postagem;
