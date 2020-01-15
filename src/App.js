import React from 'react';
import { Table, Button } from 'reactstrap';

import './App.css';

function App() {

    return ( <
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
        th > Action < /th> <
        /tr> <
        /thead> <
        tbody >
        <
        tr >
        <
        td > 1 < /td> <
        td > Recruitment Process < /td> <
        th > Get the Latest OAU Graduate < /th> <
        th > Not yet Completed < /th> <
        th > < button > View < /button></th >
        <
        /tr> <
        /tbody> <
        /Table> <
        /div>
    );
}

export default App;