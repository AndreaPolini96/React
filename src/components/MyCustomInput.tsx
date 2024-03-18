import { useState } from "react";

export function MyCustomInput(props:{
    readonly required: boolean;
    readonly label:string;
    //Callback da ricevere in input; serve per passare al genitore un contenuto informativo
    //in questo caso passa al genitore il testo dell'input ogni volta che questo cambia
    readonly onChange: (text:string) => void;
}) {
    const {required, label, onChange}=props;
    const [text, setText] = useState<string>("");

    return <>
        <div>
            <div>
                <label>{label} {required===true && <span>*</span>}</label>
                <input type="text" value={text} onChange={ev => {
                    setText(ev.target.value);
                    
                    //Invocazione della callback; passa al genitore il nuovo valore dell'input
                    onChange(ev.target.value)}}></input>
            </div>
            {required===true && text.length===0 && <span>Campo Obbligatorio!</span>}
        </div>
    </>
}