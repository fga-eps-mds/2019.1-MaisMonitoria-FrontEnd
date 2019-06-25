import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import App from './App';
import TelaFeed from './Components/Feed/Feed';
import SignUp from './Components/SignUP/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Search from './Components/Search/Search';
import ProfileMonitor from './Components/ProfileMonitor/ProfileMonitor';
import ExpandedCard from './Components/Feed/ExpandedCard';
import EditProfile from './Components/EditProfile/EditProfile';
import EditMonitoring from './Components/EditMonitoring/EditMonitoring';
import RegisterMonitoring from './Components/RegisterMonitoring/RegisterMonitoring';
import Profile from './Components/Profile/Profile';
import * as serviceWorker from './serviceWorker';
import NotFound from './Notfound'
import LikeList from './Components/Feed/Likelist'
import './index.css';




ReactDOM.render((
        <Router>    
                    <Switch> 
                        <Route exact path="/" component={App}/>
                        <Route path="/SignUp" component={SignUp}/>                        
                        <Route path="/ForgotPassword" component={ForgotPassword}/>   
                        <Route path="/RegisterMonitoring" component={RegisterMonitoring}/>
                        <Route path="/EditProfile" component={EditProfile}/>
                        <Route path="/ProfileMonitor/:id_monitor" component={ProfileMonitor}/>
                        <Route path="/expandedcard/:id_tutoring" component={ExpandedCard}/>
                        <Route path="/EditMonitoring/:id_tutoring" component={EditMonitoring}/>
                        <Route path= "/likeList/:id_tutoring" component = {LikeList}/>
                        <Route path="/Feed" component={TelaFeed}/>
                        <Route path="/Search" component={Search}/>  
                        <Route path="/Profile" component={Profile}/>
                        <Route path="*" component={NotFound}/>          
                    </Switch>
                    
                    
                    
                    
        </Router>
        

), document.getElementById('root'));

serviceWorker.register()