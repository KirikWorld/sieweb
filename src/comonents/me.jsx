import { useEffect } from "react";
import { useState } from "react";

export default function Me(props) {
    const [message, setMessage] = useState("");
    const [medic, setMedic] = useState("");
    const [date, setDate] = useState("");

    async function getMe() {
        let response = await fetch("http://127.0.0.1:8000/auth/users/me/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Token ${props.token}`,
            },
        });
        setMessage(await response.json());
    }

    async function getBlank() {
        let response = await fetch("http://127.0.0.1:8000/checkserver/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Token ${props.token}`,
            },
        });

        response = await fetch("http://127.0.0.1:8000/create/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: `Token ${props.token}`,
            },
        });
        
    }

    useEffect(() => {
        getMe();
        console.log(`${message.username}`);
    }, []);

    return (
        <div className="home">
            <header>
                <a href="/">Выйти</a>
                <p>
                    Привет, <b>{`${message.username}`}</b>
                </p>
            </header>
            <p>
                Сюда мы отправим талон: <b>{message.email}</b>
            </p>{" "}
            <div className="blank">
                <h2>Запись к врачу</h2>
                <select
                    name=""
                    id=""
                    onChange={(e) => setMedic(e.target.value)}
                >
                    <option value="" disabled>
                        Выберите врача
                    </option>
                    <option value="gin">Гинеколог</option>
                    <option value="end">Эндокринолог</option>
                    <option value="card">Кардиолог</option>
                    <option value="uzi">Узи</option>
                </select>
                <input
                    type="date"
                    name=""
                    id=""
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
                <button onClick={() => getBlank()}>Записаться</button>
            </div>
        </div>
    );
}
