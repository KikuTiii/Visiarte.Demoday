
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./NossaEquipe.module.css"


function NossaEquipe() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <div className={styles.container}>

            <div className={styles.titulo}><text>Nossa Equipe</text></div>

            <div className={styles.innerContainer}>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto1}  /></div>
                    <div className={styles.nome}>
                        Beatriz Menezes
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a href="https://www.linkedin.com/in/beatriz-santos-menezes-6705011ab/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>beatrizstmenezes@gmail.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto2}  /></div>
                    <div className={styles.nome}>
                        Kae Lucas
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}><a target="_blank" href="https://github.com/kaelucas123"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}><a target="_blank" href="https://www.linkedin.com/in/kae-lucas-31a924199/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>kaeteodoro@gmail.com</div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto3}  /></div>
                    <div className={styles.nome}>
                        Vicencia Vitória
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}><a target="_blank"href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}><a target="_blank"href="https://www.linkedin.com/in/vicencia-vitoria-2890b8228/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>vicenciavitoria.vv@gmail.com</div>
                </div>
                
                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto4}  /></div>
                    <div className={styles.nome}>
                        Matheus Kikuti
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a target="_]blank" href="https://github.com/KikuTiii"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a target="_blank" href="https://www.linkedin.com/in/matheuskikuti-s-37a8381b5/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>mkikuti2004@outlook.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto5}  /></div>
                    <div className={styles.nome}>
                        Felipe Domingos
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a target="_]blank" href="https://github.com/FelipeDomingosdeCarvalho"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a target="_blank" href="https://www.linkedin.com/in/felipe-domingos-de-carvalho/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>felipedomingosdecarvalho@gmail.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto6}  /></div>
                    <div className={styles.nome}>
                        Lucas Gabriel
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}>< a target="_]blank" href="https://github.com/luzka1"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}>< a target="_blank" href="https://www.linkedin.com/in/lucas-santos-341856247/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>lucasgsantos1727@gmail.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto7}  /></div>
                    <div className={styles.nome}>
                        Amanda Martins
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}><a target="_blank"href="#"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}><a target="_blank"href="https://www.linkedin.com/in/amanda-raim-94252924b/"><div className={styles.link}></div></a></div>
                    </div>
                   <div className={styles.email}>amandamsraim@gmail.com</div>
                </div>

                <div className={styles.box}>
                    <div className={styles.foto} ><div className={styles.foto8}  /></div>
                    <div className={styles.nome}>
                        Gabriel Almeida
                    </div>
                    <div className={styles.redes}>
                    <div className={styles.git}><a target="_blank"href="https://github.com/gabrielalmeidasantos"><div className={styles.link}></div></a></div>
                    <div className={styles.linkedin}><a target="_blank"href="https://www.linkedin.com/in/gabrielalmeidadossantos/"><div className={styles.link}></div></a></div>
                    </div>
                    <div className={styles.email}>gabriel.almeiidda@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default NossaEquipe;
