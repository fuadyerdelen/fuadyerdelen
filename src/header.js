function Header() {
    return (
        <header>
            <nav>
                <div className="header-content d-flex justify-content-between align-items-center">
                    <div><a href={window.location.href} className="text-decoration-none text-black">m.fuad</a></div>
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
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
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




    )
}


export default Header;