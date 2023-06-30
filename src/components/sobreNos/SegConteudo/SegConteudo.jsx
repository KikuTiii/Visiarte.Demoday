
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./SegConteudo.module.css"

function SegConteudo() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.container}>

            <div className={styles.titulo}><text>Em que acreditamos?</text></div>

            <div className={styles.conteudo}>

                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    className={styles.menu}
                >
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.btn}
                    >
                        Nossos Valores
                        <motion.div
                            variants={{
                                open: { rotate: 180 },
                                closed: { rotate: 0 }
                            }}
                            transition={{ duration: 0.2 }}
                            style={{ originY: 0.55 }}
                        >
                            <svg width="15" height="15" viewBox="0 0 20 20">
                                <path d="M0 7 L 20 7 L 10 16" />
                            </svg>
                        </motion.div>
                    </motion.button>
                    <div className={styles.aLista}>
                    <motion.ul
                        variants={{
                            open: {
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.05
                                }
                            },
                            closed: {
                                clipPath: "inset(10% 50% 90% 50% round 10px)",
                                transition: {
                                    type: "spring",
                                    bounce: 0,
                                    duration: 0.3
                                }
                            }
                        }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }}
                        className={styles.lista}
                    >
                        <motion.li variants={itemVariants}>
                            <div className={styles.titLista}>Missão</div>
                            <div className={styles.contLista}>Ser uma plataforma que conecta, inspira e reúna apreciadores de arte e artistas brasileiros.</div>
                        </motion.li>

                        <motion.li variants={itemVariants}>
                            <div className={styles.titLista}>Visão</div>
                            <div className={styles.contLista}>Visamos um Brasil mais unido em prol da arte nacional.</div>
                        </motion.li>

                        <motion.li variants={itemVariants}>
                            <div className={styles.titLista}>Valores</div>
                            <div className={styles.contLista}>Comunicação, Integração, Inspiração, transparência.</div>
                        </motion.li>
            
                    </motion.ul>
                    </div>
                </motion.nav>


            </div>
        </section >
    );
}

export default SegConteudo;
