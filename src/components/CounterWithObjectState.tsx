import React, { useState } from 'react';
import Display from './Display';
import { stat } from 'fs';

interface State {
  readonly value: number
};

export default function CounterWithObjectState() {
  const [state, setState] = useState<State>({ value: 0 });

  console.log("CounterWithObjectState()", state);

  return <>
    <div>Counter</div>
    <Display n={state.value} color="blue" />
    <button onClick={() => {
      //nel caso di passaggio per riferimento devo creare un nuovo oggetto con la modifica desiderata e poi passare al set il nuovo oggetto.
      const newState:State = { value: state.value + 1 };
      setState(newState);
      console.log("Click! - newState:", state.value);
    }}>premi</button>
    {state.value > 5 && <div>Attenzione! - Contatore maggiore di 5</div>}
  </>
}