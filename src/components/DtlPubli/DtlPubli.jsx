import Header from "../plataforma/reutilizavel/header/Header";
import styles from "./DtlPubli.module.css"

function DtlPubli(){

    // if (largura > altura) {
    //     largura = 800px
    //     altura = auto
    // }else{
    //     altura = 800px
    //     largura = auto
    // }

    return(
        <main>
            <Header />
            <section  className={styles.corpo}>
                <div className={styles.publiComp}>
                    <div className={styles.publi}>
                        {/* img */}
                    </div>

                    <div className={styles.comentarios}>
                        <div className={descricao}>
                            
                        </div>
                    </div>

                    <div className={styles.escreva}>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default DtlPubli;