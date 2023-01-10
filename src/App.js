import './App.css';
import { BrowserRouter as Router , Routes ,Route,  } from 'react-router-dom';
import {Home} from './pages/Home'
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Profile } from './pages/Profile';
import { Navbar } from './Navbar';
import { useState } from 'react';

import { createContext } from 'react';

export const AppContext = createContext() ;

function App() {
  const [userName , setUserName] = useState("Talha") ;
  return (
    <div className="App">
      <AppContext.Provider value = {{userName , setUserName}}>
      
       <Router>
        <Navbar/>


         <Routes>
           <Route path = '/' element = {<Home />}/>
           <Route path = '/menu' element= {<Menu/>}/>
           <Route path = '/contact' element={<Contact/>} />
           <Route path = '/profile' element = {<Profile />}/>
           <Route path = '*' element = {<h1>Page Not Fount</h1>}/>
         </Routes>
       </Router>

      </AppContext.Provider>  
    </div>
  );
}

export default App;
