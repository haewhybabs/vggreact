import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectActions from './ProjectActions';
import Projects from './Projects';

function App() {

    return ( 
        <Router >
            <div className = "App container" >
            <Switch >
            <Route path = "/" exact component = { Projects }/> 
            <Route path = "/projectactions/:id" component = { ProjectActions }/> 
            </Switch> 
            </div> 
        </Router>
    );

}

export default App;