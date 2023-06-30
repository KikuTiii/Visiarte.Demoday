import Login from "../components/Cadastro_Login/Login/Login.jsx";
import { logout, verificaLogin } from "../API";

function FazerLogin(){
    verificaLogin() && logout()

    return(
        <>
            <Login/>
        </>
    )
}

export default FazerLogin;