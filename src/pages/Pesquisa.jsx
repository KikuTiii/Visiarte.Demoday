import React from "react";
import { useParams } from "react-router-dom";
import Resultado from "../components/plataforma/resultado/Resultado";
import Header from "../components/plataforma/reutilizavel/header/Header";
import postagens from "../data/postagens.json";
import { URL_SITE } from "../API";

function Pesquisa({ textoPesquisa, setTextoPesquisa, usuarioAtual }) {
    // if (!localStorage.getItem("usuarioLogado")) {
    //     window.location.href = `${URL_SITE}/login`
    // }

    let { pesquisa } = useParams();
    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
                usuarioAtual={usuarioAtual}
            />
            <Resultado pesquisa={pesquisa} postagens={postagens.postagens} />
        </>
    );
}

export default Pesquisa;
