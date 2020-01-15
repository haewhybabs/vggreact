import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';



class App extends Component {

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
            // fetch('http://127.0.0.1:8000/projects', {
            //   method:"GET",
            //   headers:{'Content-Type':'application/json'}
            // }).then(
            //   data => {
            //     console.log(data);
            //   }
            // ).catch(error=>console.log(error))
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
                td > < Button color = "primary"
                size = "sm" > View < /Button></td >
                <
                td >
                <
                Button color = "success"
                size = "sm" > Edit < /Button> <
                Button color = "danger"
                size = "sm" > Delete < /Button> <
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
            th > Action < /th> <
            /tr> <
            /thead> <
            tbody > { projects } < /tbody> <
            /Table> <
            /div>

        );
    }
}

export default App;