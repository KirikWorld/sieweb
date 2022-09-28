import Signup from "./comonents/signup";
import { useState } from "react";
import Signin from "./comonents/login";
import Me from "./comonents/me";

export default function App() {
    const [token, setToken] = useState("");
    const [accept, setAccept] = useState(true);
    const [me, setMe] = useState(false);

    return (
        <>
            {!me && (
                <button
                    className="swap"
                    style={
                        accept
                            ? {
                                  width: "100px",
                                  background: "rgb(12, 182, 176)",
                              }
                            : {
                                  width: "180px",
                                  background: "rgb(159, 182, 12)",
                              }
                    }
                    onClick={() => setAccept(!accept)}
                >
                    {accept ? "Ко входу" : "К регистрации"}
                </button>
            )}
            {!me && accept && <Signup setAccept={setAccept} />}
            {!me && !accept && (
                <Signin
                    setMe={setMe}
                    setToken={setToken}
                    setAccept={setAccept}
                />
            )}
            {me && <Me token={token} />}
        </>
    );
}
