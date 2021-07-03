import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import SignInPage from './Pages/SignInPage/SignInPage';


function App() {
  return (
    <Router>
<Switch>
  <Route path="/" exact render={()=> <MainPage />} />
  <Route path="/signin" exact render={()=> <SignInPage />} />

</Switch>
    </Router>
  );
}

export default App;
