
function submitLogin(e){
    e.preventDefault();
    let username = e.target.lusername.value;
    let password = e.target.lpassword.value;
    console.log(username + " " + password);

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
            if(response.status === 200){
                return response.json();
            }
        }).catch((error) => {
            console.log(error);
        });
}

function LoginForm(){
    return (
        <form onSubmit={submitLogin}>
            <input type="text" id="lusername" placeholder="Username"></input>
            <input type="text" id="lpassword" placeholder="Password"></input>
            <input type="submit"></input>
        </form>
    );
}

export default LoginForm;