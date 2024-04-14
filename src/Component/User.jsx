
import { useEffect, useState } from 'react'
import  axios from 'axios'
//let url = 'https://legendary-happiness-759r69p7rrjcwr4-4000.app.github.dev/users'
const user =()=>{
    const [users,setUser]= useState(null)
    const [userId  ,setUserId]=useState("")
    const [errorMessage , setErrorMessage]= useState("")
    const handleChange=(event)=>{
        setUserId(event.target.value);

    }
    useEffect(()=>{
        axios.get('/api/users')
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
            setErrorMessage('something went wrong')
        })

    })

    
    return(
        <>
       <div>
        <h1>get user</h1>
       </div>
        {users.map(user=>{
            <div key={user.id}>
                <h1>{user.name}</h1>

            </div>
        })

        }
        {errorMessage ? <div>{errorMessage}</div>: null}
        </>
    )
}
export default user ;