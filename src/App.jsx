import { useState, useEffect } from 'react'
import Users from './Users'
function App() {
  const [users, setUsers] = useState([])
  const [hash, setHash] = useState([window.location.hash.slice(1)*1])
   useEffect(()=> {
    const fetchData = async()=>{
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      const json = await response.json()
      setUsers(json)
    }
    fetchData()}, [])

    useEffect(()=>{
      window.addEventListener('hashchange', ()=>{
        setHash(window.location.hash.slice(1)*1)
      })
      },[])
      
    
    const user = users.find( user => hash === user.id)
  
      
  
    return (
    <>
      <h1>Contact List: ({users.length})</h1>
      <h2>{user ? user.name: ''}</h2>
      {
        user ? (<p>{[user.username]}</p>) : null
      }
      {
        user ? (<p>{[user.address.street , user.address.city].join(", ")}</p>) : null
      }
      {
        user ? (<p>{[user.email].join(", ")}</p>) : null
      }
      <Users users={users} hahs={hash}/>
      
    </>
  )
}

export default App
