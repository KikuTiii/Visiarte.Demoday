import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import icon from "../../../../img/icone_imagem_modal.png";
import icone_pesquisa from "../../../../img/icone_pesquisa.png";
import icone_home from "../../../../img/icone_home.png";
import icone_publicar from "../../../../img/icone_publicar.png";
import icone_chat from "../../../../img/icone_chat.png";
import icone_perfil from "../../../../img/icone_perfil.png";
import icone_notificacao from "../../../../img/icone_notificacao.png";
import usuarios from "../../../../data/descubra.json";
import Notificacao from "../../../Notificacao/Notificacao";

function Modal({ abrir, setModal, usuarioAtual }) {
    const [foto, setFoto] = React.useState("");

    React.useEffect(() => {
        for (let i = 0; i < usuarios.descubra_perfis.length; i++) {
            if (usuarios.descubra_perfis[i].username == usuarioAtual) {
                setFoto(usuarios.descubra_perfis[i].foto_perfil);
            }
        }
    }, [usuarioAtual]);

    if (abrir) {
        return (
            <div className={styles.containerModal}>
                <form className={styles.modal}>
                    <div className={styles.headerModal}>
                        <h6>Criar publicação</h6>
                        <span onClick={() => setModal(false)}>&#9747;</span>
                    </div>
                    <div className={styles.mainModal}>
                        <div>
                            <img src={foto} alt="" />
                            <p>{usuarioAtual}</p>
                        </div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="No que você está pensando?"
                        ></textarea>
                    </div>
                    <div className={styles.footerModal}>
                        <img src={icon} alt="" />
                        <div>
                            <button
                                className={styles.cancelar}
                                onClick={() => setModal(false)}
                            >
                                cancelar
                            </button>
                            <button className={styles.publicar}>
                                Publicar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function Header({ setTextoPesquisa, textoPesquisa, usuarioAtual }) {
    const navigate = useNavigate();
    const [modal, setModal] = React.useState(false);
    const [notificacao, setNotificacao] = React.useState(false);
    return (
        <>
            <div>
                <nav className={styles.header}>
                    <Link to="/feed">
                        <svg
                            viewBox="0 0 328 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.logo}
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M50.5845 64.6897C51.1093 63.9898 51.541 63.2248 51.8689 62.4137L71.511 13.8285C71.8386 13.018 72.5211 12.396 73.3567 12.1389C73.9057 11.97 74.4974 11.9686 75.0463 12.1375C75.8875 12.3963 76.563 13.0273 76.8784 13.8489L97.9604 68.7611H111.01L89.5953 11.3763L88.5683 8.70623C88.1393 7.59088 87.5707 6.53437 86.8762 5.56192L86.6878 5.29815C85.8445 4.11739 84.7993 3.09479 83.6004 2.27742C82.3651 1.43522 80.9869 0.824737 79.5331 0.475796L79.1898 0.393384C78.1003 0.131878 76.9837 -0.000243737 75.8633 -0.000243834L72.3612 -0.000244141C71.2516 -0.000244238 70.1461 0.135845 69.0696 0.404977L67.8122 0.71932C65.7713 1.22955 63.9517 2.38975 62.6281 4.02485C62.0939 4.68464 61.6488 5.41173 61.304 6.18746L59.8158 9.536L42.5041 53.7784C42.3203 54.2481 42.0791 54.6932 41.786 55.1037L41.3561 55.7057C40.9302 56.3021 40.3363 56.758 39.6501 57.0154L39.4486 57.091C38.688 57.3763 37.8465 57.3569 37.0998 57.0368C36.4698 56.7667 35.9449 56.2985 35.6049 55.7033L35.1414 54.892C34.9868 54.6215 34.8538 54.3392 34.7435 54.0479L14.4794 0.501662L0.757812 0.501661L24.9939 61.6973C25.5019 62.9799 26.2257 64.1661 27.1341 65.2044L27.1816 65.2588C27.6568 65.802 28.1827 66.2985 28.7523 66.7416C29.9972 67.7101 31.4307 68.408 32.9609 68.7906L33.2309 68.8581C33.9418 69.0359 34.6669 69.1516 35.3979 69.2038L38.5683 69.4303L41.2591 69.2509C42.5093 69.1675 43.7437 68.9247 44.9324 68.5284L45.4281 68.3631C46.3394 68.0593 47.2061 67.6353 48.0054 67.1024L48.1045 67.0362C49.0582 66.4003 49.8968 65.6068 50.5845 64.6897ZM194.158 15.2246H201.185V22.5859H194.158V15.2246ZM194.158 26.6017H201.185V55.7124H194.158V26.6017ZM155.009 26.6017H147.982V55.7124H155.009V26.6017ZM147.982 15.2246H155.009V22.5859H147.982V15.2246ZM298.887 35.7076C298.887 34.6625 299.056 33.6242 299.386 32.6328L299.412 32.5567C299.619 31.9342 299.894 31.3363 300.232 30.7737L300.411 30.4751C300.95 29.5758 301.675 28.8019 302.538 28.2049C303.113 27.8069 303.741 27.4927 304.404 27.2716L304.814 27.135C305.875 26.7814 306.986 26.6011 308.104 26.6011H319.24C320.385 26.6011 321.523 26.7981 322.602 27.1834L322.719 27.2252C323.115 27.3666 323.499 27.5377 323.869 27.737L324.058 27.8384C325 28.3459 325.821 29.0523 326.463 29.9085C326.816 30.3787 327.111 30.8894 327.343 31.4296L327.364 31.4799C327.782 32.4555 327.998 33.5059 327.998 34.5673V36.1404C327.998 37.133 327.808 38.1166 327.44 39.0383L327.395 39.1505C327.129 39.8147 326.764 40.4343 326.311 40.988C325.767 41.6523 325.106 42.2113 324.361 42.6372L324.146 42.7597C323.483 43.139 322.77 43.4254 322.028 43.6108L321.732 43.685C320.893 43.8946 320.032 44.0006 319.168 44.0006H304.575V46.4658C304.575 47.0438 304.721 47.6125 304.997 48.1199C305.374 48.8105 305.975 49.3519 306.701 49.6544L306.859 49.7203C307.34 49.9204 307.855 50.0235 308.375 50.0235H326.659V55.7117H308.65C307.722 55.7117 306.797 55.5979 305.896 55.3727L305.371 55.2415C304.402 54.9993 303.485 54.5855 302.662 54.0197C301.717 53.3701 300.91 52.5236 300.302 51.5512C299.812 50.7662 299.448 49.8984 299.236 48.9973L299.167 48.7014C298.981 47.9124 298.887 47.1046 298.887 46.2941V35.7076ZM306.793 32.6856C307.315 32.4248 307.89 32.289 308.473 32.289H319.123C319.46 32.289 319.793 32.3532 320.105 32.4781C320.346 32.5746 320.572 32.7061 320.775 32.8684L320.878 32.9508C321.161 33.1774 321.408 33.4465 321.609 33.7485C321.851 34.1108 322.023 34.5147 322.118 34.9398L322.127 34.9843C322.247 35.5231 322.247 36.0816 322.127 36.6204L322.118 36.6649C322.023 37.09 321.851 37.494 321.609 37.8563C321.408 38.1582 321.161 38.4273 320.878 38.654L320.775 38.7364C320.572 38.8987 320.346 39.0302 320.105 39.1266C319.793 39.2515 319.46 39.3157 319.123 39.3157H304.575V35.875C304.575 35.2822 304.751 34.7027 305.079 34.2094C305.189 34.0449 305.315 33.8916 305.455 33.7518L305.817 33.3893C306.103 33.1038 306.432 32.8662 306.793 32.6856ZM279.815 26.6018V19.9097H285.838V26.6018H293.868V32.2901H285.838V47.0127L285.936 47.8985C285.981 48.307 286.114 48.7009 286.326 49.0533L286.35 49.0936C286.454 49.2672 286.579 49.4273 286.722 49.5705C287.02 49.868 287.388 50.0848 287.793 50.2004L287.936 50.2414C288.209 50.3193 288.491 50.3588 288.775 50.3588H293.868V55.7125H287.295C286.439 55.7125 285.588 55.5899 284.767 55.3485L284.217 55.1866C283.519 54.9813 282.865 54.6484 282.288 54.2047C281.436 53.5494 280.78 52.6733 280.39 51.6716L280.286 51.4022C279.974 50.602 279.815 49.751 279.815 48.8924V47.0127V32.2901H275.8V26.6018H279.815ZM254.641 27.9571C253.922 28.4966 253.329 29.186 252.903 29.9776L252.882 30.0163C252.548 30.6351 252.319 31.3047 252.204 31.998L252.155 32.2903C252.081 32.7351 252.044 33.1851 252.044 33.636V55.7117H258.067V35.2116C258.067 35.0483 258.08 34.8852 258.107 34.7241C258.19 34.2246 258.4 33.7548 258.716 33.3593L258.903 33.1259L259.001 33.0285C259.372 32.6566 259.851 32.4102 260.37 32.3237C260.507 32.3008 260.646 32.2893 260.785 32.2893H272.12V26.6011H258.95C258.253 26.6011 257.559 26.6982 256.889 26.8897L256.658 26.9558C255.93 27.1637 255.247 27.5031 254.641 27.9571ZM219.316 21.763C219.496 21.3099 219.735 20.8829 220.027 20.493C220.4 19.9959 220.855 19.5659 221.372 19.2212L221.436 19.1786C221.874 18.8863 222.35 18.6537 222.85 18.4871L223.122 18.3964C223.774 18.179 224.451 18.0458 225.137 18.0001L226.613 17.9016L228.353 18.0259C228.754 18.0545 229.152 18.118 229.542 18.2155L229.69 18.2526C230.53 18.4624 231.316 18.8453 231.999 19.3765C232.312 19.6196 232.6 19.892 232.861 20.19L232.887 20.2197C233.385 20.7893 233.783 21.44 234.061 22.1437L247.359 55.712H239.83L228.712 26.3396C228.651 26.1798 228.578 26.0249 228.494 25.8765L228.239 25.4316C228.053 25.105 227.765 24.8482 227.419 24.7C227.009 24.5244 226.548 24.5138 226.13 24.6703L226.02 24.7117C225.643 24.8529 225.317 25.1031 225.084 25.4303L224.849 25.7591C224.687 25.9851 224.555 26.2304 224.454 26.4892L213.062 55.712H205.868L219.316 21.763ZM129.137 53.1206C129.429 52.7308 129.668 52.3037 129.848 51.8507L143.296 17.9016L136.102 17.9016L124.71 47.1244C124.609 47.3833 124.476 47.6285 124.315 47.8546L124.08 48.1833C123.846 48.5105 123.521 48.7607 123.144 48.9019L123.033 48.9434C122.616 49.0999 122.155 49.0892 121.745 48.9136C121.399 48.7655 121.111 48.5086 120.924 48.182L120.67 47.7371C120.585 47.5887 120.512 47.4339 120.452 47.274L109.334 17.9016H101.805L115.103 51.47C115.381 52.1736 115.778 52.8244 116.277 53.3939L116.303 53.4237C116.564 53.7217 116.852 53.9941 117.165 54.2371C117.848 54.7684 118.634 55.1512 119.474 55.3611L119.622 55.3981C120.012 55.4957 120.41 55.5591 120.811 55.5878L122.55 55.712L124.027 55.6136C124.713 55.5678 125.39 55.4347 126.042 55.2173L126.314 55.1266C126.814 54.9599 127.29 54.7274 127.728 54.435L127.792 54.3924C128.309 54.0478 128.764 53.6177 129.137 53.1206ZM161.366 33.7829C161.366 33.1261 161.472 32.4736 161.68 31.8505C161.915 31.1452 162.277 30.4887 162.748 29.9133L162.822 29.8223C163.298 29.2404 163.868 28.7421 164.508 28.3481L165.144 27.9571C165.525 27.7226 165.923 27.5164 166.334 27.3402C167.472 26.8525 168.697 26.6011 169.935 26.6011H187.131V32.2893H170.515C170 32.2893 169.489 32.4103 169.028 32.6408C168.199 33.0554 167.579 33.8007 167.324 34.692L167.31 34.7395C167.143 35.3242 167.15 35.9448 167.328 36.5259C167.581 37.3462 168.158 38.0275 168.926 38.4113L169.018 38.4572C169.487 38.692 170.005 38.8141 170.529 38.8141H179.898C180.811 38.8141 181.719 38.9507 182.592 39.2192L182.669 39.2429C183.188 39.4028 183.691 39.6132 184.17 39.8711L184.351 39.9683C185.192 40.4213 185.936 41.0351 186.542 41.7747L186.574 41.8144C186.944 42.2662 187.255 42.763 187.499 43.293C187.918 44.2 188.135 45.1871 188.135 46.186V47.4172C188.135 48.4758 187.933 49.5246 187.539 50.5074L187.526 50.5419C187.264 51.1972 186.916 51.8152 186.493 52.3798C185.919 53.145 185.213 53.8016 184.409 54.3188L184.373 54.3417C183.651 54.8061 182.86 55.1552 182.031 55.3764L181.916 55.4069C181.158 55.6092 180.376 55.7117 179.59 55.7117H161.701V50.0234H179.085C179.536 50.0234 179.982 49.9269 180.392 49.7403C181.171 49.3866 181.774 48.7265 182.062 47.9214C182.309 47.2284 182.309 46.4609 182.062 45.7679C181.774 44.9629 181.171 44.3028 180.392 43.949C179.982 43.7624 179.536 43.6659 179.085 43.6659H170.66C169.164 43.6659 167.683 43.3656 166.305 42.7827L165.341 42.3748C164.486 42.013 163.72 41.4697 163.095 40.7825C162.615 40.2547 162.227 39.6505 161.946 38.9949L161.918 38.931C161.554 38.0812 161.366 37.1663 161.366 36.2418V33.7829Z"
                                fill="url(#paint0_linear_2077_14)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_2077_14"
                                    x1="115.416"
                                    y1="53.9205"
                                    x2="232.708"
                                    y2="-21.0717"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#F06024" />
                                    <stop offset="1" stop-color="#F8BB6C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            let url = `/resultado/${textoPesquisa}`;
                            navigate(url);
                        }}
                    >
                        <div className={styles.pesquisa}>
                            <img src={icone_pesquisa} alt="" />
                            <input
                                type="text"
                                value={textoPesquisa}
                                onChange={({ target }) =>
                                    setTextoPesquisa(target.value)
                                }
                                name="p"
                                id=""
                                placeholder="Pesquisar no Visiarte"
                            />
                        </div>
                    </form>

                    <div className={styles.navegacao}>
                        <a onClick={() => setNotificacao((not) => !not)}>
                            <img src={icone_notificacao} alt="" />
                        </a>

                        <Link to="/feed">
                            <img src={icone_home} alt="" />
                        </Link>

                        <a
                            className={styles.acionarModal}
                            onClick={() => setModal((modal) => !modal)}
                        >
                            <img src={icone_publicar} alt="" />
                        </a>

                        <Link to="/chat">
                            <img src={icone_chat} alt="" />
                        </Link>

                        <Link to={`/usuario/${usuarioAtual}`}>
                            <img src={icone_perfil} alt="" />
                        </Link>
                    </div>
                </nav>
                <Notificacao abrir={notificacao} />
                <div className={styles.header_falsa}></div>
            </div>
            <Modal
                abrir={modal}
                setModal={setModal}
                usuarioAtual={usuarioAtual}
            />
        </>
    );
}

export default Header;