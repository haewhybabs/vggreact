import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Projects extends Component {

    state = {
        projects: []
    }


    componentWillMount() {

        axios.get('http://127.0.0.1:8000/projects').then((response) => {
            console.log(response)


            this.setState({

                projects: response.data

            })

        })
    }
    render() {

        let projects = this.state.projects.map((project) => {
            return (

                <
                tr key = { project.id } >
                <
                td > { project.id } < /td> <
                td > { project.name } < /td> <
                td > { project.description } < /td> <
                td > { project.completed } < /td> <
                td >

                <
                Link to = { `/projectDetails/${project.id}` } >
                <
                Button color = "primary"
                size = "sm" > View < /Button> <
                /Link>

                <
                /td> <
                /tr>

            )
        })

        return (

            <
            div className = "App container" >


            <
            Table >
            <
            thead >
            <
            tr >
            <
            th > # < /th> <
            th > Project Name < /th> <
            th > Description < /th> <
            th > Status < /th> <
            th > Details < /th> <
            /tr> <
            /thead> <
            tbody > { projects } < /tbody> <
            /Table>

            <
            /div>

        );
    }
}

export default Projects;