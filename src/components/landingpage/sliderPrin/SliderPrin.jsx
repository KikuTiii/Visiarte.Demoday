import styles from "./SliderPrin.module.css";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import imgCarousel from "../../../imgCarousel";

function SliderPrin() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
            <section className={styles.container}>
                <motion.div 
                className={styles.titulo}
                ref={ref}
                style={{
                    transform: isInView ? "none" : "translateY(-20vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                  }}>
                    {" "}
                    <h1>Artes para inspirações</h1>
                </motion.div>

                <motion.div className={styles.conteudoo}>
                    <motion.div ref={carousel} className={styles.carousel}>
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -2500 }}
                            className={styles.innerCarousel}
                        >
                            {imgCarousel.map((image) => {
                                return (
                                    <motion.div className={styles.item}>
                                        <img src={image} />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}

export default SliderPrin;
