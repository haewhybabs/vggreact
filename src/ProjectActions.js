
import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

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

        let actions = this.state.actions.map((action) => {
            return (
                <tr key = { action.id }>
                    <td> { action.id } </td> 
                    <td> { action.description } </td> 
                    <td> { action.notes } </td> 
                    {action.completed===false ?<td>Not Yet Completed</td>: <td>Completed</td>}
                </tr>

            )
        })

        

        return (

            <div class = "container">
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
            </div>

        );
    }
}


export default ProjectActions;