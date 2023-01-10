import './App.css';
import { BrowserRouter as Router , Routes ,Route,  } from 'react-router-dom';
import {Home} from './pages/Home'
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './Navbar';
import { useState } from 'react';

function App() {
  const [userName , setUserName] = useState("Talha") ;
  return (
    <div className="App">
        
       <Router>
        <Navbar/>


         <Routes>
           <Route path = '/' element = {<Home username = {userName}/>}/>
           <Route path = '/menu' element= {<Menu/>}/>
           <Route path = '/contact' element={<Contact/>} />
           <Route path = '/profile' element = {<Profile username = {userName}
           setusername = {setUserName}/>}/>
           <Route path = '*' element = {<h1>Page Not Fount</h1>}/>
         </Routes>
       </Router>

    </div>
  );
}

export default App;
