import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';




class ProjectDetails extends Component {

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


        return (

            <
            div className = "App container" >


            <
            /div>

        );
    }
}

export default ProjectDetails;