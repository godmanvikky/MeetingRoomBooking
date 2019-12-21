import React from 'react';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom'
import Book from '../src/pages/bookroom'
import Today from '../src/pages/Today'
function App() {
 return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/book' component={Book}></Route>
        <Route  path='/rooms' component={Today}></Route>
    </Switch>
         
    
    </BrowserRouter>
 )
}

export default App;
