import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './header';
import Main from './main';
import Hello from './hello';
import Works from './works';
import Footer from './footer';



function App() {
    return (
        <div>
            <Header />
            <Hello />
            <Main />
            <Works />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));



