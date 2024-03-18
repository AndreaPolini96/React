import { MyCustomInput } from "./MyCustomInput";

export function MiddleComponent(props:{
    onChange: (text:string) => void
}) {
    const {onChange}=props;
    return <>
        <MyCustomInput required={true} label='Username' onChange={onChange} />
    </>
}