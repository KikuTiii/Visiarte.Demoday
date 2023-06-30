import styles from "./Usuarios.module.css";
import { useRef } from 'react';
import data from "../../../data/usuarios.json";

function Usuarios() {

    const ref = useRef(null);


    return (
        <div className={styles.container}>

        {data.map((item) => {
            const {id, name,image,comentario,pontuacao} =item
            return(
            <div className={styles.box} key={id}>
            <div className={styles.foto}>
                <img src={image} alt="" />
            </div>
            <div className={styles.textos}>
                <div className={styles.nome}>
                    {name}
                </div>
                <div className={styles.comentario}>
                    {comentario}
                </div>
                <div className={styles.pontuacao}>
                    <div className={styles.simbolo}>
                    &#x272E;
                    </div>
                    <div className={styles.conteudo}>
                        {pontuacao}
                    </div>
                </div>
            </div>
        </div>
        );
        })}

        </div>
    );
}

export default Usuarios;
