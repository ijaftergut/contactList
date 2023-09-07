import { useState, useEffect } from 'react'

function Users(props, hahs) {

  const { users } = props
  console.log(users)
  const hash = props.hahs
    return (
    
      <ul>
        {
          users.map((user)=>{
            return <li key={user.id } className={ user.id === hash*1 ? 'selected': ''}><a href={`#${user.id === hash*1 ? '': user.id}`}>{user.name}</a></li>

          })
        }
      </ul>

  )
}

export default Users
