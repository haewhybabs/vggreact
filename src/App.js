import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import Projects from './Projects';



function App() {

    return ( <
        Router >
        <
        div className = "App container" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { Projects }
        /> <
        Route path = "/projectdetails/:id"
        component = { ProjectDetails }
        /> <
        /Switch> <
        /div> <
        /Router>
    );

}

export default App;