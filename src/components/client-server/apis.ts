import { UserDto } from "./UserDto";

export async function fetchUsers(){
    const response = await fetch("https://reqres.in/api/users?delay=3");
    const users: UserDto[] = (await response.json()).data;
    return users;
}