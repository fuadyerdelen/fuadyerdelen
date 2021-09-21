import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function DenemeTitle() {
    return (
        <div>
            <h2> naber la </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis doloribus,
                distinctio officia saepe sequi excepturi. Earum nobis modi omnis. Ipsum molestiae est quasi,
                delectus velit sapiente cupiditate natus r labor!</p>
        </div>
        
    )
}

ReactDOM.render( <DenemeTitle/>  , document.getElementById('root'));



