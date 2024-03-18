import { useEffect, useState } from "react"
import { UserDto } from "./UserDto";
import User from "./User";
import { LoadingOutlined } from '@ant-design/icons';
import { Alert, Button, Spin } from 'antd';
import { fetchUsers } from "./apis";


export default function UserList() {

    const[list, setList] = useState<UserDto[]>([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError]=useState<string|null>(null);

    async function myApiCall() {
        console.log("Inizio chiamata");
        setList([]);
        setError(null);
        setIsLoading(true);
        try{
            const users=await fetchUsers();
            console.log(users);
            setList(users);
        } catch(e:any) {
            setError(e.message);
        }
        setIsLoading(false);
    }
    
    useEffect(() => {
        myApiCall();
        console.log("log");
    }, []);
    return <div>
        <h3>UserList</h3>
        {isLoading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
        <Button type="primary" onClick={()=>{myApiCall()}}>Refresh</Button>
        {error != null && <Alert
            message="Errore"
            description={error}
            type="error"
            showIcon
        />}
        {list.map((user,index) => <User key={index} user={user} />)}
    </div>
}