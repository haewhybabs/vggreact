import React, { Component } from 'react';
import axios from 'axios';
import { Table,Button,
  Card,
  CardText, 
  CardHeader,
  CardBody,
   } from 'reactstrap';

import { Link } from 'react-router-dom';


class Projects extends Component {

    state = {
        projects: []
    }


    componentWillMount() {

        axios.get('https://vggtestapi.herokuapp.com/projects').then((response) => {
            
            this.setState({

                projects: response.data

            })

        })
    }
    render() {
        let x=0;
        let projects = this.state.projects.map((project) => {
            x=x+1;
            return (
                <tr key = { project.id } >
                    <td > { project.id } </td> 
                    <td > 
                        <Link to = { `/projectactions/${project.id}` }>
                            {project.name} 
                        </Link>
                    </td> 
                    <td > { project.description } </td> 
                    {project.completed===false ?<td>Not Yet Completed</td>: <td>Completed</td>}
                    <td>
                        <Link to = { `/projectactions/${project.id}` }>
                            <Button color = "primary" size = "sm"> View </Button> 
                        </Link>
                    </td> 
                </tr >

            )
        })

        return (

            
            
            <div className = "App container">

            
                <Card>
                    <CardHeader>Project</CardHeader>
                    <CardBody>
                        <CardText>
                            <Table>
                                <thead>
                                    <tr>
                                        <th> # </th> 
                                        <th> Project Name </th> 
                                        <th> Description </th> 
                                        <th> Status </th> 
                                        <th>Actions</th> 
                                    </tr>
                                </thead> 
                                <tbody > { projects } </tbody> 
                            </Table>
                        </CardText>
                    </CardBody>   
                </Card>
            </div>

        );
    }
}

export default Projects;


