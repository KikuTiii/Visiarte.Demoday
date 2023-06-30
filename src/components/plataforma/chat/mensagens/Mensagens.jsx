import React from "react";
import Mensagem from "./mensagem/Mensagem";
import styles from "./Mensagens.module.css";

const Mensagens = () => {
    return (
        <div className={styles.containerMensagens}>
            <div className={styles.header}>
                <div>
                    <img
                        src="https://images.pexels.com/photos/14681410/pexels-photo-14681410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <span>fulano1</span>
                </div>
            </div>
            <div className={styles.mensagens}>
                <Mensagem tipo={1} msg="Oi tudo bem?" />
                <Mensagem tipo={2} msg="Tudo ótimo e contigo?" />
                <Mensagem tipo={1} msg="Eu olhei seu perfil e adorei" />
                <Mensagem tipo={2} msg="Muito Obrigado, agradeço pelo elogio" />
                <Mensagem
                    tipo={1}
                    msg="Eu adoraria criar algum projeto com contigo"
                />
                <Mensagem tipo={2} msg="A ideia é muito boa" />
            </div>
            <div className={styles.inputMensagem}>
                <div>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Digite sua mensagem..."
                    />
                    <span>Enviar</span>
                </div>
            </div>
        </div>
    );
};

export default Mensagens;
