import React from 'react';
import './App.css';
import Advertisements from './components/Advertisements';
import Header from './components/Header';
import Mainmenu from './components/Mainmenu';
import Notifications from './components/Notifications';
import Sidemenu from './components/Sidemenu';





function App() {
  return (
    
    <div>
      
      
      
      <Header/>
      <Notifications/>
      <Advertisements/>
      <div className="Menus">
       <Mainmenu/> 
       <Sidemenu/>
       </div>

     
    </div>
   
  );
}

export default App;
