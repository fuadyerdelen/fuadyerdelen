import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div className="header-content d-flex justify-content-between align-items-center">
                        <div><a href={window.location.href} className="text-decoration-none text-black">mfy</a></div>
                        <div>
                            <button className="btn header-btn">SEARCH</button>
                        </div>
                        <div>
                            <button type="button" className="btn header-btn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">MENU
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">M.Fuad Yerdelen</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body d-flex justify-content-end">
                                <ul className="fs-3">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Works</li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <main>
                <div className="mainContent d-flex flex-wrap">

                    <div className="d-flex flex-column">
                        <h1>Hello<span className="dot">.</span></h1>
                        <p className="ac w-75">My name is M.Fuad Yerdelen. I’m a frontend developer and here's is my
                            portfolio. Have a look.</p>
                    </div>

                    <div className="mfyImage d-flex ms-4 mt-5">naber</div>
                </div>

            </main>

            <section className="mt-5 p-4">
                <h2>My works</h2>
            </section>

        </div>
    )
}

ReactDOM.render(<Header/>, document.getElementById('root'));



