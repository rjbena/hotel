import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRooms from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
      <Route exact path= '/' component={Home}/>
      <Route exact path='/rooms' component={Rooms}/>
      <Route exact path='/rooms/:slug' component={SingleRooms}/>
      <Route component={Error} />
     </Switch>

    </div>
  );
}

export default App;