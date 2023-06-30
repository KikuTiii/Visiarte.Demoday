import styles from "./Entrada.module.css";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Entrada() {

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,

        }
    }
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <>
            <div className={styles.container}>
            
            <div className={styles.innerContainer}>
                
                <motion.div className={styles.boxEntrada}
                varitants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration:3}
                }}
                ref={ ref }
                style={{
                    transform: isInView ? "none" : "translateX(10vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ><text>Quem Somos?</text></motion.div>

                <motion.div className={styles.titEntrada}
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration:1.5},   
                }}
                ref={ ref }
                style={{
                    transform: isInView ? "none" : "translateX(10vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                ><text>Somos Artistas</text></motion.div>

            </div>
            </div>
        </>
    );
}

export default Entrada;
