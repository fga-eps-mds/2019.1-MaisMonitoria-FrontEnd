import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TelaFeed from './Components/Feed/Feed';
import SignUp from './Components/SignUP/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ModifyPassword from './Components/ModifyPassword/ModifyPassword';
import Search from './Components/Search/Search';
import EditProfile from './Components/EditProfile/EditProfile';
import './index.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Tab from './Components/Tab/Tab.js';

ReactDOM.render((
        <Router>
                    <Switch>            
                        <Route exact path="/" component={App}/>
                        <Route path="/Feed" component={TelaFeed}/>
                        <Route path="/SignUp" component={SignUp}/>
                        <Route path="/ForgotPassword" component={ForgotPassword}/>
                        <Route path="/ModifyPassword" component={ModifyPassword}/>
                        <Route path="/Search" component={Search}/>  
                        <Route path="/EditProfile" component={EditProfile}/>               
                    </Switch>
                    <div>
                        <Tab/>            
                    </div>
        </Router>

), document.getElementById('root'));