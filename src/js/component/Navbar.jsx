import React from 'react';

const Navbar = () => {
    const musicLink = 'https://cdns-images.dzcdn.net/images/cover/d2e300110e98ee75bb3654c9d960da17/1900x1900-000000-80-0-0.jpg';

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "transparent" }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: "white" }}>
                    <span className="navbar-toggler-icon" style={{ backgroundColor: "white" }}></span>
                </button>
                <a className="navbar-brand" >
                    <img src={musicLink} alt="Music Link" style={{ width: '150px', height: '150px', marginRight: '10px' }} />
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" >Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
