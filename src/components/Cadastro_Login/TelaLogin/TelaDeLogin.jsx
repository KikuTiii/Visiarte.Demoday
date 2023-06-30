import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_API } from "../../../API";
import BtnCadastroLogin from "../BtnCadastroLogin/BtnCadastroLogin";
import Styles from "./TelaDeLogin.module.css";

function TelaDeLogin() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [infoUsuario, setInfoUsuario] = React.useState("");
    const [erro, setErro] = React.useState("");
    const data = {
        usuarioLogin: usuario,
        senha: senha,
    };

    function fazerLogin(e) {
        e.preventDefault();
        axios
            .post(`${URL_API}/usuario/login`, data)
            .then(function (response) {
                setInfoUsuario(JSON.parse(response.data));

                localStorage.setItem("usuarioLogado", {
                    id: infoUsuario._id,
                    nome_usuario: infoUsuario.nome_usuario,
                    email: infoUsuario.email,
                });

                navigate("/feed");
            })
            .catch(function (error) {
                setErro("Os dados inseridos estão incorretos");
            });
    }

    return (
        <>
            <form onSubmit={(e) => fazerLogin(e)}>
                <div className={Styles.DivMeio}>
                    <div className={Styles.MeioBaixo}>
                        <h1 className={Styles.TextoIniciar}>Conectar-se</h1>
                        <span style={{ color: "red" }}>{erro}</span>
                        <div className={Styles.Iniciando}>
                            <input
                                value={usuario}
                                onChange={({ target }) =>
                                    setUsuario(target.value)
                                }
                                required
                                type="email"
                                placeholder="E-MAIL"
                                className={Styles.Nome}
                            />
                        </div>

                        <div className={Styles.Iniciando}>
                            <input
                                value={senha}
                                onChange={({ target }) =>
                                    setSenha(target.value)
                                }
                                required
                                type="password"
                                placeholder="SENHA"
                                className={Styles.Nome}
                            />
                        </div>

                        <div className={Styles.Manter}>
                            <input
                                type="checkbox"
                                name="ManterLogin"
                                id="ManterLogin"
                                className={Styles.Login}
                            />
                            <label htmlFor="ManterLogin">
                                Manter conectado
                            </label>
                        </div>

                        {/* <button type="submit"> */}
                        <BtnCadastroLogin
                            // Acessar={Acessar}
                            className={Styles.BtnLogin}
                        />
                        {/* </button> */}

                        {/* <Link to="/" className={Styles.EsqSenha}>
                            Esqueceu a senha?
                        </Link> */}

                        <Link to="/cadastro" className={Styles.CrieConta}>
                            Criar conta
                        </Link>
                    </div>
                </div>
            </form>
        </>
    );
}

export default TelaDeLogin;
