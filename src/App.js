import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./components/FontAwesomeIcons";
import "./components/Styles/Typography";
import Landing from './containers/Landing/Landing';
import Header from './components/Header-App/Nav';
import './App.css';
import Index from './components/Dashboard'
import ProtectedRoute from './middleware/ProtectedRoute';
import SpinnerPage from "@Components/Spinner/SpinnerPage";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Landing} />


                <ProtectedRoute path="/dashboard">
                    <ProtectedRoute path='' component={Header} />
                    <ProtectedRoute path='' component={Index} />
                </ProtectedRoute>
                {/*
                <Route path='/dashboard' exact component={} />
           
                */
                }
                <Route render={() => <SpinnerPage/>} />
            </Switch>
        </Router>
    );
}

export default App;
