import { Point } from '../lezione1';
import styles from './Display.module.scss';

// export default function Display(props: {n:number,color?:string}) {
//     const {n,color}=props;

//     const coloreDaUsare=color ?? "red" //se la variabile color è valorizzata assume il suo valore, se color è null allora assume il valore "red" -> è come l'operatore ternario
//     return <div style={{color:coloreDaUsare}}>{n}</div>;
// }

//La stessa cosa la posso ottenere mediante l'assegnazione di un valore di default a color
export default function Display(props: {n:number, color?:string, obj?:Point}) {
    const {n,color="red"}=props;

    return <div className={styles.display} style={{color:color}}>{n}</div>;
}