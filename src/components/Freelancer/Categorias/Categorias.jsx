import styles from "./Categorias.module.css";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import data from "../../../data/categorias.json"
import foto from "../../../img/background.jpg"

function Categorias() {
    
    const ref = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log(ref.current.offsetWidth);
        ref.current.scrollLeft -= ref.current.offsetWidth;
    }

    const handleRightClick = (e) =>{
        e.preventDefault();
        console.log(ref.current.offsetWidth);
        ref.current.scrollLeft += ref.current.offsetWidth;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.titulo}>Categorias</div>

                <div className={styles.innerContainer}>
                <motion.div className={styles.carousel} ref={ref}>
                    {data.map((item) => {
                        const {id, name, image} = item;
                        return(
                        <div className={styles.item} key={id}>
                        <div className={styles.img}><img src={image} /></div>
                        <div className={styles.categoria}>{name}</div>
                    </div>
                        );
                    })}
                    </motion.div>

                    <div className={styles.botoes}>

                        <motion.button onClick={handleLeftClick}
                        whileHover={{ scale: [null, 1.2, 1.1] }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 17 }}
                        >
                        &#x276E;</motion.button>
                        <motion.button onClick={handleRightClick}
                        whileHover={{ scale: [null, 1.2, 1.1] }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 17 }}
                        >
                        &#x276F;</motion.button>
                        
                    </div>
                    </div>
            </div>
        </>
    );
}

export default Categorias;
