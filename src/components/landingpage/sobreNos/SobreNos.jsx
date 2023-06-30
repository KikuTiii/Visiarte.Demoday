import styles from "./SobreNos.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


function SobreNos() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className={styles.container}>
                <div className={styles.SBtit}>
                    <h1>
                        Conheça mais sobre a
                    </h1>
                    <text className={styles.subtit}>
                        <p className={styles.laranja}>VisiArte</p>
                    </text>
                </div>

                <div className={styles.SBcont}>

                    <motion.div className={styles.SBimg}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(-5vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} />

                    <motion.div className={styles.linhaExterna}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateX(5vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }} />

                    <div className={styles.contTexto}>
                        
                        <motion.div className={styles.titulo}
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateX(5vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}>
                            <h1>O que é a <text> VisiArte ?</text></h1>
                        </motion.div>

                        <motion.div className={styles.conteudo}
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateX(5vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}>
                            A VisiArte é mais que apenas uma rede social para artistas, também é cultura, aprendizado e união, venha fazer parte dessa comunidade.
                        </motion.div>

                        <Link to="/sobrenos"><motion.div className={styles.btnAcessar}
                        whileHover={{ scale: [null, 1.2, 1.1] }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 17 }}
                        ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateX(5vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}>
                        Saber Mais &#x276F;
                        </motion.div></Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SobreNos;
