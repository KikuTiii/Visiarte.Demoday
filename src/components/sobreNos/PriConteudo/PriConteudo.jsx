
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./PriConteudo.module.css"

function PriConteudo() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const icon = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,

        }
    }
    return (

        <motion.div className={styles.container}>
            
            <motion.div className={styles.titulo}
            varitants={icon}
            initial="hidden"
            animate="visible"
            transition={{
                default: { duration:3}
            }}
            ><text>Nós somos pessoas que amam amar a arte</text></motion.div>

            <motion.div className={styles.texto}
            ref={ ref }
            style={{
                transform: isInView ? "none" : "translateX(-10vh)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                
                <p>
                Com a oportunidade que o Proa nos proporcionou de se conectar com pessoas do nosso ramo de atuação, nós da VisiArte pensamos em como poderiamos levar esse pensamento de conectar pessoas do seu ramo para outra área.
                </p>
                <br />
                <p>
                E por conta desse pensamento pensamos em como o mercado artístico é desvalorizado em algumas áreas, e por conta disso pensamos em democratizar cada vez mais a arte, por que a arte é algo que todos devem praticar para se expressar cada vez mais de melhor maneira.
                </p>
                <br />
                <p>
                Todos da VisiArte são amantes da cultura artistica e querem um lugar para se expressar e se conectar com os diversos aspectos da arte.
                </p>
                </motion.div>

        </motion.div>
    );
}

export default PriConteudo;
