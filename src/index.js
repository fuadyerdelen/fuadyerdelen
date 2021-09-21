import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import imgIcon from './images/bear.png';



function Header() {
    return (
        <div>

            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center  py-3 mb-4 border-bottom">
                    < a href = "/"
                    class = "d-flex align-items-center justify-content-around col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" >
                       <img id='icon' src={imgIcon} alt="" />  <h4>m.fuad yerdelen</h4>
                    </a>

                    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="a" class="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="a" class="nav-link px-2 link-dark">Features</a></li>
                        <li><a href="a" class="nav-link px-2 link-dark">Pricing</a></li>
                        <li><a href="a" class="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="a" class="nav-link px-2 link-dark">About</a></li>
                    </ul>

                
                </header>
            </div>

            <div class="container">

                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        
                    </a>
                    <span class="text-muted">© m.fuad yerdelen 2021 </span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a href="https://twitter.com/fuadyerdelen" className="text-muted" >twitter</a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}

ReactDOM.render( <Header/>  , document.getElementById('root'));



