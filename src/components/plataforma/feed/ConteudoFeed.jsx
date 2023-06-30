import React from "react";
import styles from "./ConteudoFeed.module.css";
import SobreMim from "./sobreMim/SobreMim";
import Postagens from "./postagens/Postagens";
import Sugestoes from "../reutilizavel/sugestoes/Sugestoes";
import Notificacao from "../../Notificacao/Notificacao";

function ConteudoFeed({ sugestoes, postagens, sobreMim }) {
    return (
        <div className={styles.conteudo_feed}>
            <SobreMim data={sobreMim} />
            <Postagens
                data={postagens.postagens}
                minhaFoto={sobreMim.foto_perfil}
            />
            <Sugestoes data={sugestoes} />
        </div>
    );
}

export default ConteudoFeed;
