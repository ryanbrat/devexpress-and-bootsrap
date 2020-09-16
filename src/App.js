import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';
import Home from './components/Home';
import ApplicantForm from './components/ApplicantForm';
import DoubleForm from './components/DoubleForm';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <SideBar/>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ApplicantForm" component={ApplicantForm} />
          <Route exact path="/DoubleForm" component={DoubleForm} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
