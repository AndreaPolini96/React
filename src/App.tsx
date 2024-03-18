import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import logo from "./assets/logo512.png";
import Display from './components/Display';
import Counter from './components/Counter';
import TextComponent from './components/TextComponent';
import CounterWithObjectState from './components/CounterWithObjectState';
import { MyCustomInput } from './components/MyCustomInput';
import { PersonInput } from './components/Exercise1/PersonInput';
import { MiddleComponent } from './components/MiddleComponent';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList/ToDoList';
import { Button } from 'antd';
import UserList from './components/client-server/UserList';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';


// export default function App() {
//   return <>
//     <div className={styles.title}>
//       <img src={logo} alt="logo" />
//       <div>Fitstic React 2024</div>
//     </div>
//     { /*<MyComponent /> */}
//     <CyclicRenderingComponent />
//   </>;
// }

// //ha la stessa funzione della function Sum con la differenza che la function ha valenza solo all'interno di MyComponent, mentre questa variabile const sum ha valenza in tutto il file
// const sum=(n1:number, n2:number) => {return n1+n2};

// export function MyComponent() {
//   // function Sum(n1:number, n2:number){
//   //   return n1+n2;
//   // }


//   let num:number=5;
//   let str:string="ciao";
//   let bool:boolean=true;

//   //Rendering condizionale con variabile di appoggio
//   let val:JSX.Element;
//   if(bool===true)
//   {
//     val=<div>bool è true</div>
//   }
//   else
//   {
//     val=<div>bool è false</div>
//   }

//   //Stampare qualcosa solo se è true, altrimenti non stampare nulla
//   let val1:JSX.Element | null=null;
//   if(bool===true)
//   {
//     val1=<div>bool è true</div>
//   }

//   //Lo switch può essere utilizzato ma non dentro al JSX -> JSX non supporta lo switch quindi devo per forza utilizzarlo mediante varibiabile di appoggio
//   let varAppoggio;
//   switch(num) {
//     case 1:{ 
//       varAppoggio=<div>num è 1</div>;
//       break;
//     }
//     case 2:{ 
//       varAppoggio=<div>num è 2</div>;
//       break;
//     }
//     case 3:{ 
//       varAppoggio=<div>num è 3</div>;
//       break;
//     }
//     default:{
//       varAppoggio=<div>altro</div>;
//       break;
//     }
//   }

//   let varSomma=sum(2,3);
//   //let varSomma=Sum(2,3);

//   return <div>
//   <div>myComponent!</div>
//   <div>num:{num}</div>
//   <div>str:{str}</div>
//   <div>bool:{bool} Attenzione! I booleani non vengono visualizzati</div>
//   {val}
//   {/*Rendering condizionale con operatore ternario*/}
//   {bool === true ? <div>bool è true</div> : <div>bool è false</div>} 
//   {/*Rendering con and logico -> Stampare qualcosa solo se la condizione è true, altrimenti nulla*/}
//   {bool===true && <div>bool è true</div>}
//   <div>Risultato somma: {varSomma}</div>
//   <div>Risultato somma: {sum(4,3)}</div>
//   {/*<div>Risultato somma: {Sum(4,3)}</div>*/}
//   </div>;
// }

// export function CyclicRenderingComponent() {
//   let array:number[]=[2,4,6,7];
//   let arrayJSX=array.map(item => {return <div>Num:{item}</div>});

//   let arrayDiJSX=[];
//   for(let i=0; i<array.length;i++)
//   {
//     arrayDiJSX.push(<div key={i}>arrayDiJSX posizione {i} : {array[i]}</div>);
//   }

//   return <>
//   <h4>Rendering ciclico</h4>
//   {arrayJSX}
//   {array.map((item,index) => {return <div key={index}>Num {index} : {item}</div>})}
//   {arrayDiJSX}
//   </>
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },
]);

export default function App() {
  const [text, setText]=useState("");
  const [name, setName]=useState("");
  const [surname, setSurname]=useState("");
  const [value, setValue]=useState(10);
  const [interval, setInterval]=useState(0);

  function calcolo (n:number){
    console.log("Esecuzione calcolo con n: ",n);
    return n*2;
  }

  //Se nello useEffect si definisce come lista di dipendenze l'array vuoto [], allora viene invocato l'effetto al mount del componente
  useEffect(() => {
    console.log("useEffect evento di mount!");
    return () => {
      console.log("useEffect evento di unmount!");
    };
  },[]);//React invoca l'effetto solo nel momento di montaggio del componente
  
  //Non c'è limite al numero di useEffect che si possono definire
  useEffect(() => {
    console.log("useEffect evento di mount2!");
  },[]);

  console.log("App()");

  return <>
    <div><h1>App</h1></div>
    {/* <Counter /> */}

    {/* Differenza tra cambio di una prop qualsiasi e cambio della prop key:
        - se cambia la prorp qualsiasi, il componente viene RIDISEGNATO
        - se cambia la prop key, il componente viene REINIZIALIZZATO (tutti gli stati tornano al valore iniziale)  
      */}
    {/* <Counter initialValue={value}/> */}
    {/* <Counter key={value} />
    <button onClick={() => {setValue(20)}}>imposta a 20</button>
    <div>Value: {value}</div> */}

    {/* <TextComponent /> */}
    
    {/* <CounterWithObjectState /> */}
    
                                                  {/*Implementazione della callback */}
    {/* <MyCustomInput required={true} label='Username' onChange={(text => {
      console.log(text);
      setText(text);
    })} />
    <div>Testo in App.tsx: {text}</div> */}
    
    {/* <MyCustomInput required={false} label='Password' /> */}
    
    {/* <MiddleComponent onChange={(text => {
      console.log(text);
      setText(text);
    })} />
    <div>Testo in App.tsx: {text}</div> */}

    {/* {value !== 20 && <Timer />} */}

    {/* ESERCIZIO - 1 */}
     {/* <PersonInput onSave={(persona:{name:string, surname:string}) => {
    console.log("Input della callback",persona);
    setName(persona.name);
    setSurname(persona.surname);}}/>
    <div>Nome: {name}</div>
    <div>Cognome: {surname}</div> */}

    {/* ESERCIZIO - 2 */}
    {/* <ToDoList /> */}

    <RouterProvider router={router} />

    <UserList />
  </>
}