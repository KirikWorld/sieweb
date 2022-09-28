import { useState } from "react";

export default function Signin(props){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function signin() {
        let user = {
            password: password,
            username: login
        };

        let response = await fetch("http://127.0.0.1:8000/auth/token/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });
        let message = await response.json()
        let status = response.status;
        if (status === 400) {
            setError(true);
        }if(status===200){
            console.log(message.auth_token)
            props.setToken(message.auth_token)
            props.setMe(true)
        }
        setErrorMessage(JSON.stringify(message));
    }

    return (
        <div className="signin">
            <h1>Вход</h1>
            <input
                type="text"
                name=""
                id=""
                className="username"
                placeholder="Сюда логин"
                value={login}
                onInput={(e) => setLogin(e.target.value)}
            />
            <input
                type="password"
                name=""
                id=""
                className="password"
                placeholder="Сюда пароль"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
            />
            <button className="sumbit" onClick={() => signin()}>
                Подтвердить
            </button>
            {error && <h1>{errorMessage}</h1>}
        </div>
    );
}