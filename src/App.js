import React from 'react';
import "./App.css";
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import UserForm from "./Components/UserForm"
import Table from "./Components/Table"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

function App() {

  return (
    <div>
     <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path = "/users" component = {Table} />
          <Route path = "/" component = {UserForm} />
        </Switch>
     </Router>
    </div>
   
  );
}

export default App;
