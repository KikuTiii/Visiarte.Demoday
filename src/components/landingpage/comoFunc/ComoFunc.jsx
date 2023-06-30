import styles from "./ComoFunc.module.css";
import { useRef } from "react"; 
import { motion, useInView } from "framer-motion";

function ComoFunc() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className={styles.container}>
                <div className={styles.comoFunc}>
                    <div className={styles.linhaExterna} />

                    <div className={styles.imgCF} ></div>
                    <div className={styles.textoCF}>
                        <motion.div className={styles.titCF}
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateX(10vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} >

                            <h1>Como Funcionamos:</h1>

                        </motion.div>

                        <motion.div className={styles.contCF}
                            ref={ref}
                            style={{
                                transform: isInView ? "none" : "translateX(20vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }} >
                        
                            <text>
                                Somos uma plataforma voltada a ajudar os{" "}
                                <text className={styles.laranja}>artistas</text>{" "}
                                de todas as áreas a criarem{" "}
                                <text className={styles.laranja}>conexões</text>{" "}
                                com outros artistas, e{" "}
                                <text className={styles.laranja}>divulgar</text>{" "}
                                os seus projetos, além de ter uma{" "}
                                <text className={styles.laranja}>
                                    área exclusiva
                                </text>{" "}
                                para cursos.
                            </text>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ComoFunc;
