import "../styles/LoginForm.css"
import {useNavigate} from "react-router-dom";
function LoginForm() {
    const navigate = useNavigate();

    function submitLogin(e) {
        e.preventDefault();
        let username = e.target.lusername.value;
        let password = e.target.lpassword.value;

        console.log(username + " " + password);

        //No sense in trying to implement legitimate authentication at this point... a lot more research is needed.
        /*
        const request = new Request("http://localhost:8090/login", {
            method: "POST",
            body: `{"username": "${username}", "password": "${password}"}`,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        console.log(request);

        fetch(request)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            }).catch((error) => {
                console.log(error);
            });
        */


        const path = "/";
        return navigate(path);
    }

    return (
        <div className="login-page-container">
            <div className="login-form-container">
                <div className="login-logo-container">
                    <img src="/WalmartLoginLogo.jpg" alt="Walmart Logo."></img>
                </div>
                <div className="login-input-container">
                    <form className="login-form" onSubmit={submitLogin}>
                        <input type="text" id="lusername" placeholder="User ID (e.g. wm5p4rk)"></input>
                        <input type="password" id="lpassword" placeholder="Password"></input>
                        <input className="login-form-submit" type="submit" value="Sign In"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;