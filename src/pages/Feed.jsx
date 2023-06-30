import React from "react";
import Header from "../components/plataforma/reutilizavel/header/Header";
import ConteudoFeed from "../components/plataforma/feed/ConteudoFeed";
import postagens from "../data/postagens.json";
import descubra from "../data/descubra.json";
import { URL_SITE } from "../API";

function Feed({
    textoPesquisa,
    setTextoPesquisa,
    usuarioAtual,
    setUsuarioAtual,
}) {
    // if (!localStorage.getItem("usuarioLogado")) {
    //     window.location.href = `${URL_SITE}/login`
    // }

    var sugestoes = [];
    var usuAtual = [];

    React.useEffect(() => {
        for (let i = 0; i < descubra.descubra_perfis.length; i++) {
            if (descubra.descubra_perfis[i].username === "mochileiro") {
                setUsuarioAtual(() => usuAtual.username);
            }
        }
    }, [usuarioAtual, setUsuarioAtual]);

    for (let i = 0; i < descubra.descubra_perfis.length; i++) {
        if (descubra.descubra_perfis[i].username === "mochileiro") {
            var usuAtual = descubra.descubra_perfis[i];
        } else {
            sugestoes.push(descubra.descubra_perfis[i]);
        }
    }

    return (
        <>
            <Header
                setTextoPesquisa={setTextoPesquisa}
                textoPesquisa={textoPesquisa}
                usuarioAtual={usuarioAtual}
            />
            <ConteudoFeed
                sugestoes={sugestoes}
                postagens={postagens}
                sobreMim={usuAtual}
            />
        </>
    );
}

export default Feed;
