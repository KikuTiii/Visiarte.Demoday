import React from "react";
import Postagem from "../../reutilizavel/postagem/Postagem";
import styles from "./Postagens.module.css";
import icone_video from "../../../../img/icone_video.png";
import icone_imagem from "../../../../img/icone_imagem.png";

function Postagens({ data, minhaFoto }) {
    return (
        <div className={styles.containerPostagens}>
            <div className={styles.criarPostagem}>
                <img src={minhaFoto} alt="" className={styles.minhaFoto} />
                <div className={styles.conteudoCriarPostagem}>
                    <input type="text" placeholder="Começar uma publicação" />
                    <div className={styles.midia}>
                        <div className={styles.opcoesMidia}>
                            <img
                                src={icone_video}
                                alt=""
                                className={styles.iconeMidiaVideo}
                            />
                            <span>Video</span>
                        </div>
                        <div className={styles.opcoesMidia}>
                            <img
                                src={icone_imagem}
                                alt=""
                                className={styles.iconeMidiaImagem}
                            />
                            <span>Imagem</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.borda}></div>

            <div className={styles.postagens}>
                {data.map((post) => (
                    <Postagem
                        key={post.id_postagem}
                        id={post.id_postagem}
                        img_perfil={post.foto_perfil_usuario}
                        nome={post.username}
                        texto={post.conteudo_postagem.texto_postagem}
                        img_postagem={post.conteudo_postagem.foto_postagem}
                    />
                ))}
            </div>
        </div>
    );
}

export default Postagens;
