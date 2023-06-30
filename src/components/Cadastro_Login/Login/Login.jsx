import Styles from "./Login.module.css"
import LogoLogin from "../Logo/Logo_Login";
import TelaDeLogin from "../TelaLogin/TelaDeLogin";

function Login() {
    return (
        <section className={Styles.fundo}>
            <LogoLogin />
            <TelaDeLogin />
        </section>
    )
}

export default Login;