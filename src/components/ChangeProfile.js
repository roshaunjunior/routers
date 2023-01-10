import React, { useState } from 'react' ;
import { useContext } from 'react';
import { AppContext } from '../App';

function ChangeProfile() {
    const[newUserName , setNewUserName] = useState('') ;
    const{setUserName} = useContext(AppContext) ;
  return (
    <div>
        <input type="text" 
        onChange={(event)=> {
        setNewUserName(event.target.value) ;
        }}
        />
        <button onClick={()=> {
            setUserName(newUserName)
        }}>Change the user</button>
    </div>
  )
}

export default ChangeProfile