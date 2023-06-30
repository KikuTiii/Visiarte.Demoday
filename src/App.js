import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import descubra from "./data/descubra.json";

// PAGINAS -------------------------------

import LandingPage from "./pages/LandingPage";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import FazerLogin from "./pages/FazerLogin";
import FazerCadastro from "./pages/FazerCadastro";
import SobreNos from "./pages/SobreNos";
import Freelancer from "./pages/Freelancer";
import Pesquisa from "./pages/Pesquisa";
import NaoEncontrado from "./pages/NotFound";
import Perfil from "./pages/Perfil";
import TermosDeUso from "./components/TermosDeUso/TermosDeUso";
import DtlPubli from "./components/DtlPubli/DtlPubli";

// -------------------------------

function App() {
    const [textoPesquisa, setTextoPesquisa] = React.useState("");
    const [usuarioAtual, setUsuarioAtual] = React.useState("");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/termosDeUso" element = {<TermosDeUso />}/>
                <Route path="/detalhesDaPubli" element ={<DtlPubli/>} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/SobreNos" element={<SobreNos />} />
                <Route path="/Freelancer" element={<Freelancer />} />
                <Route path="/login" element={<FazerLogin />} />
                <Route path="/cadastro" element={<FazerCadastro />} />

                {/* plataforma */}
                <Route
                    path="/feed"
                    element={
                        <Feed
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />

                <Route
                    path="/chat/"
                    element={
                        <Chat
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />
                <Route
                    path="/chat/:username"
                    element={
                        <Chat
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />

                <Route
                    path="/usuario/:usuario"
                    element={
                        <Perfil
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />

                <Route
                    path="/resultado/:pesquisa"
                    element={
                        <Pesquisa
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />

                {/* -------------------------------- NOT FOUND 404 ------------------------------------- */}
                <Route
                    path="/resultado/*"
                    element={
                        <NaoEncontrado
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />
                <Route
                    path="/usuario/*"
                    element={
                        <NaoEncontrado
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />
                <Route
                    path="/postagem/*"
                    element={
                        <NaoEncontrado
                            setTextoPesquisa={setTextoPesquisa}
                            textoPesquisa={textoPesquisa}
                            usuarioAtual={usuarioAtual}
                            setUsuarioAtual={setUsuarioAtual}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
