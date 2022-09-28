import { useState } from "react";

export default function Signup(props) {
    const [login, setLogin] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function signup() {
        let user = {
            email: mail,
            username: login,
            password: password,
        };

        let response = await fetch("http://127.0.0.1:8000/auth/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(user),
        });

        let status = response.status;
        if (status === 400) {
            setError(true);
        }if(status===201){
            props.setAccept(false)
        }
        setErrorMessage(JSON.stringify(await response.json()));
    }

    return (
        <div className="signup">
            <h1>Регистрация</h1>
            <input
                type="text"
                name=""
                id=""
                className="mail"
                placeholder="Сюда почту"
                value={mail}
                onInput={(e) => setMail(e.target.value)}
            />
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
            <button className="sumbit" onClick={() => signup()}>
                Подтвердить
            </button>
            {error && <h1>{errorMessage}</h1>}
        </div>
    );
}
