import React,{useEffect, useState} from "react";

const Table = () => {
    const [users,setUsers] = useState([])

    const getUsers = async () =>{
        let response = await fetch("https://formreactserver.herokuapp.com/data")
        let data = await response.json()
        setUsers(data)
    }

    useEffect(()=>{
        getUsers()
    },[])

    const userDetails = users.map((user) => <tr key = {user._id}>
        <td>{user.name}</td>
        <td>{user._id}</td>
        <td>{user.country}</td>
        <td>{user.maritalstatus}</td>
        <td>{user.gender}</td>
        <td>{user.favfood}</td>
        <td>{user.favcolour}</td>
    </tr>)

    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope ="col">Marrital Status</th>
                    <th scope ="col">Gender</th>
                    <th scope ="col">Fav Food</th>
                    <th scope ="col">Fav Colour</th>
                </tr>
            </thead>
            <tbody>
                {userDetails}
            </tbody>
        </table>
        </div>
    )
}

export default Table;