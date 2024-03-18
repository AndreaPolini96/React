import { useState } from "react";

export default function TextComponent() {
    //Stato che memorizza il testo dato in input dall'utente
    const [text, setText] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return <>
        <div>TextComponent</div>
                                                                    {/*usando la proprietà
                                                                    value indica che questo
                                                                    input è controllato
                                                                    da noi */}
        <div>Username: <input type="text" placeholder="Inserisci un nome" value={text} onChange={(ev)=>{
            setText(ev.target.value);
        }}/><button onClick={() => {
            setText("");
        }}>Pulisci</button></div>
        <div>Password: <input type="password" placeholder="Inserisci password" onChange={(ev)=>{
            setPassword(ev.target.value);
        }}/></div>
        {/*Devo avere uno stato per ogni input che voglio memorizzare; siccome voglio memorizzare username e password ho bisogno di 2 stati */}
        <div>Username: {text}</div>
        <div>Password: {password}</div>
    </>
}