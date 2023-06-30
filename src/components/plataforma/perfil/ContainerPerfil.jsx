import React from "react";
import styles from "./ContainerPerfil.module.css";
import Postagem from "../reutilizavel/postagem/Postagem";

const ContainerPerfil = ({ user, postagens }) => {
    if (user) {
        return (
            <div className={styles.containerPerfil}>
                <div className={styles.infoPerfil}>
                    <img
                        src={user.foto_capa_usuario}
                        alt=""
                        className={styles.capa}
                    />
                    <div className={styles.detalhesPerfil}>
                        <div className={styles.esquerda}>
                            <img
                                src={user.foto_perfil}
                                alt=""
                                className={styles.perfil}
                            />
                            <div>
                                <h5>{user.name}</h5>
                                <button>Seguir</button>
                            </div>
                        </div>
                        <div className={styles.estatisticas}>
                            <div>
                                <h6>15</h6>
                                <span>Postagens</span>
                            </div>
                            <div>
                                <h6>2.5k</h6>
                                <span>Seguidores</span>
                            </div>
                            <div>
                                <h6>178</h6>
                                <span>Seguindo</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.conteudo}>
                    <div className={styles.sobreMim}>
                        <h6>Sobre mim</h6>
                        <div className={styles.borda}></div>
                        <p>{user.bio}</p>
                    </div>
                    <div className={styles.containerPostagens}>
                        {postagens?.map((post) => (
                            <Postagem
                                img_perfil={post.foto_perfil_usuario}
                                nome={post.username}
                                img_postagem={
                                    post.conteudo_postagem.foto_postagem
                                }
                                texto={post.conteudo_postagem.texto_postagem}
                                id={post.id_postagem}
                                key={post.id_postagem}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
    }
};

export default ContainerPerfil;
