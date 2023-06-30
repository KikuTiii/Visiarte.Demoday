import styles from "./APlataforma.module.css";

function APlataforma() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.titulo}>
                    <h1>A Plataforma</h1>
                </div>

                <div className={styles.conteudo}>
                    <div className={styles.texto}>
                        <p>
                            Venha participar da rede social que foi desenvolvida para <text>todo tipo de Arte e Artista</text>. <br />
                            <p> Temos a missão de ser uma plataforma simples e intuitiva para você artista que quer <text>espalhar conhecimento</text>,
                            ou você que quer <text>aprender</text> novas técnicas e conceitos de arte.{" "}</p>
                            
                        </p>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.img1}></div>
                        <div className={styles.img2}></div>
                        <div className={styles.img3}></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default APlataforma;
