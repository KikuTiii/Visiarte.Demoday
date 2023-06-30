import React from "react";
import ContainerChat from "../components/plataforma/chat/ContainerChat";
import Header from "../components/plataforma/reutilizavel/header/Header";
import { URL_SITE } from "../API";

function Chat({ textoPesquisa, setTextoPesquisa, usuarioAtual }) {
    // if (!localStorage.getItem("usuarioLogado")) {
    //     window.location.href = `${URL_SITE}/login`
    // }

    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
                usuarioAtual={usuarioAtual}
            />
            <main>
                <ContainerChat />
            </main>
        </>
    );
}

export default Chat;
