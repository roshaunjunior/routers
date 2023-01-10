import React, { useState } from 'react' ;

function ChangeProfile(props) {
    const[newUserName , setNewUserName] = useState('') ;
  return (
    <div>
        <input type="text" 
        onChange={(event)=> {
        setNewUserName(event.target.value) ;
        }}
        />
        <button onClick={()=> {
            props.user(newUserName)
        }}>Change the user</button>
    </div>
  )
}

export default ChangeProfile