import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ContainerChat.module.css";
import Mensagens from "./mensagens/Mensagens";
import Pessoas from "./pessoas/Pessoas";
import img_chat from "../../../img/chat.png";

const ContainerChat = () => {
    const { username } = useParams();

    return (
        <div className={styles.containerChat}>
            <Pessoas userAtivo={username} />
            {username && <Mensagens />}
            {!username && (
                <div className={styles.nMensagem}>
                    <img src={img_chat} alt="" />
                    <span>Suas mensagens</span>
                </div>
            )}
        </div>
    );
};

export default ContainerChat;
