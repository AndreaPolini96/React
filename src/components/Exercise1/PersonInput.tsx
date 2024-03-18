import React, { useState } from "react";

export function PersonInput(props:{
     readonly onSave: (persona:{ name: string; surname: string }) => void;
}){
    const {onSave}=props;
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    return <>
        <div>
            <label>Username</label>
            <input type="text" placeholder="Nome" value={name} onChange={
                (ev) => setName(ev.target.value)} />
        </div>
        <div>
            <label>Surname</label>
            <input type="text" placeholder="Cognome" value={surname} onChange={
                (ev) => setSurname(ev.target.value)} />
        </div>
        <div>
            <button onClick={() => {onSave({name,surname});}}>Salva</button>
        </div>
    </>;
}