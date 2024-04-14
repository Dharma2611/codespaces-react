
import { useState } from 'react'
import  axios from 'axios'
let url = 'https://legendary-happiness-759r69p7rrjcwr4-4000.app.github.dev/users'
const user =()=>{
    const [user,setUser]= useState(null)
    const [userId  ,setUserId]=useState("")
    const [errorMessage , setErrorMessage]= useState("")
    const handleChange=(event)=>{
        setUserId(event.target.value);

    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.get("api/users")
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
            setErrorMessage('something went wrong')
        })

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="userId"  value={userId} onChange={handleChange}/>
            </p>
            <button>getUser</button>
        </form>
        {(user)? <div>{user.name}</div> : null

        }
        {errorMessage ? <div>{errorMessage}</div>: null}
        </>
    )
}
export default user ;