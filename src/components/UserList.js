import React from 'react'

function UserList({userList}) {
  return (      
    <ul className="user_form martop_10">
        {userList.map((user, index) => (
            <li key={index} className='martop_10'>
                {user.userName} ({user.userAge}세)
            </li>
        ))}
    </ul>
  )
}

export default UserList