import React from "react";
import styles from "./Resultado.module.css";
import Sugestoes from "../reutilizavel/sugestoes/Sugestoes";
import Postagem from "../reutilizavel/postagem/Postagem";
import sugest from "../../../data/descubra.json";
import Pessoa from "./pessoa/Pessoa";

const Resultado = ({ postagens, pesquisa }) => {
  return (
    <div className={styles.containerResultados}>
      <span>
        Resultados da pesquisa: <strong>{pesquisa}</strong>
      </span>
      <div className={styles.container}>
        <div className={styles.resultados}>
          <div>
            <h5>Pessoas</h5>
            <div className={styles.resultadoPessoas}>
              {sugest.descubra_perfis?.map((pess, index) => (
                index < 5 && <Pessoa p={pess} key={pess.id_usuario} />

              ))}
            </div>
          </div>
          <div>
            <h5>Postagens</h5>
            <div className={styles.resultadoPostagens}>
              {postagens.map((post) => (
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
        </div>
        <Sugestoes data={sugest.descubra_perfis} />
      </div>
    </div>
  );
};

export default Resultado;
