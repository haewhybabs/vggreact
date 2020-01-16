
import React, { Component } from 'react';
import axios from 'axios';
import { Table,
  Card,
  CardText, 
  CardHeader,
  CardBody,
   } from 'reactstrap';

class ProjectActions extends Component {

    constructor(props){
        super(props);

        this.state = {
            actions: [],
            id:props.match.params.id
        }
    }

    componentWillMount() {

        axios.get(`https://vggtestapi.herokuapp.com/projectactions/${this.state.id}`).then((response) => {
            this.setState({

                actions: response.data

            })

        })
    }

    render() {
        let x=0

        let actions = this.state.actions.map((action) => {
            x=x+1
            return (
                <tr key = { action.id }>
                    <td> { x } </td> 
                    <td> { action.description } </td> 
                    <td> { action.notes } </td> 
                    {action.completed===false ?<td>Not Yet Completed</td>: <td>Completed</td>}
                </tr>
                
                
            )
            
        })

        

        return (

            <div class = "container">
                <Card>
                    <CardHeader>Project Actions</CardHeader>
                    <CardBody>
                        <CardText>
                            <Table>
                                <thead>
                                    <tr>
                                    <th> # </th> 
                                    <th> Description </th> 
                                    <th> Note </th> 
                                    <th> Status </th> 
                                    </tr>
                                </thead> 
                                
                                <tbody>
                                    {actions}
                                </tbody> 
                            </Table> 
                        </CardText>
                    </CardBody>   
                </Card>
            </div>

        );
    }
}


export default ProjectActions;