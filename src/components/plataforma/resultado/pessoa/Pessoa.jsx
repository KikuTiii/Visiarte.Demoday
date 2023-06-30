import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pessoa.module.css";
import imgSeguir from "../../../../img/seguir.png";

const Seguir = ({ seguindo }) => {
    const [seg, setSeg] = React.useState(seguindo);

    React.useEffect(() => {
        // fazer requisição no back pra seguir/naoSeguir 
    }, [seg]);

    if (seg) {
        return (
            <div className={styles.direita}>
                <button onClick={() => setSeg(!seg)} className={styles.seguir}>
                    Seguindo
                </button>
                <Link to="/feed" className={styles.enviarMensagem}>
                    <button>Enviar mensagem</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={styles.direita}>
                <button onClick={() => setSeg(!seg)} className={styles.seguir}>
                    <img src={imgSeguir} alt="" />
                    Seguir
                </button>
            </div>
        );
    }
};

const Pessoa = ({p}) => {
        return (
            <div className={styles.pessoa}>
                <Link to={`/usuario/${p.username}`} className={styles.containerEsquerda}>
                    <div className={styles.esquerda}>
                        <img
                            src={p.foto_perfil}
                            alt=""
                        />
                        <div>
                            <h6>{p.username}</h6>
                            <span>{p.name}</span>
                        </div>
                    </div>
                </Link>
                <Seguir seguindo={p.seguindo} />
            </div>
        );
    
};

export default Pessoa;
