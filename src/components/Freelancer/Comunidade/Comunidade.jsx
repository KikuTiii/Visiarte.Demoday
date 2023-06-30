import styles from "./Comunidade.module.css";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Comunidade() {


    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.esquerda}>
                        <div className={styles.titulo}>
                            <h1>Encontre uma comunidade inteira</h1>
                            <p>de freelancers ao alcance de um click</p>
                        </div>
                        <div className={styles.conteudo}>
                            <ul>
                                <li>
                                    <div className={styles.simbolos}>&#x2714;</div>
                                    <div className={styles.conteudo2}>
                                        <h2>Faça o orçamento direto com o artista</h2>
                                        <p>contato direto por meio de um chat.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.simbolos}>&#x2714;</div>
                                    <div className={styles.conteudo2}>
                                        <h2>Pagamento protegido pela plataforma</h2>
                                        <p>Seu pagamento é protegido por nossa plataforma.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.simbolos}>&#x2714;</div>
                                    <div className={styles.conteudo2}>
                                        <h2>Atendimento 7/7</h2>
                                        <p>Atendimento das 8h às 20h, para sua segurança</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.direita}>
                        <div className={styles.box1}>Gostei da composição, o que você achou Almeida?</div>
                        <div className={styles.box2}>A escolha de cores está incrível!</div>
                        <div className={styles.box3}>Fico feliz que tenham gostado!</div>
                        <div className={styles.foto1} />
                        <div className={styles.foto2} />
                        <div className={styles.foto3} />
                        <div className={styles.foto4} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Comunidade;
