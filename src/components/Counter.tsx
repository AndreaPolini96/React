import React, { useEffect, useState } from 'react';
import Display from './Display';

export default function Counter(props: {
  readonly initialValue?: number;
}) {
  const { initialValue = 0 } = props;

  //Definizione di uno stato di tipo number
  //inizializzato a ad un valore iniziale passato come parametro
  const [contatore, setContatore] = useState(initialValue); //useStato(<valoreIniziale>) 
  //setContatore è una funzione che mi consente di assegnare un nuovo valore alla variabie contatore

  /*
  Come si legge in italiano?
  quando almeno una delle variabili elencate nella lista di dipendenze cambia, allora viene invocato l'effetto

  useEffect necessità di due parametri:
    - lista delle dipendenze -> array (secodno argomento)
    - effetto -> funzione (primo argomento)
  */
  useEffect(() => {
    console.log("useEffect in azione", initialValue);
    setContatore(initialValue);
    return () =>{
      console.log("return useEffect",initialValue);
    };
  },[initialValue]);
  //useEffect(()=>{effetto/operazioneDaSvolgere},[arrayDiParametriDaControllareIlCambiamento])

  console.log("Counter()", contatore);

  return <>
    <div>Counter</div>
    <Display n={contatore} color="blue" />
    {contatore > 5 && <div>Attenzione! - Contatore maggiore di 5</div>}
    <Display n={5} color="grey" />
    <Display n={4} obj={{ x: 1, y: 2 }} />
    <button onClick={() => {
      setContatore(contatore + 1);

      //Funzionamento di setContatore
      //setContatore(contatore+1);
      //setContatore(contatore+2);
      //in questo caso qui il contatore aumenta ogni volta di 2; viene considerato sempre l'utlima set.

      // setContatore(partial => partial + 1);
      // setContatore(partial => partial + 2);
      //in questo caso, utilizzando l'arrow function si sommano i vari setContatore, quindi il counter aumenta ogni volta di 3

      console.log("Click! - contatore:", contatore);
    }}>premi</button>
  </>
}