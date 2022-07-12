import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import Button from '@mui/material/Button';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#ECEFF1 '}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><span style={{textAlign:"justify" }}><HouseIcon/></span> <b>Dream Home</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="/">Rent</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Buy</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Manage Property
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Sell</a></li>
                            <li><a className="dropdown-item" href="/">losem</a></li>
                            <li><a className="dropdown-item" href="/">Something else</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                   <Button variant="outlined" sx={{color:"#7266eb"}}>Login</Button>
                </div>
                <div style={{margin:"0 5px 0 5px"}}>
                   <Button variant="contained" sx={{backgroundColor:"#7266eb"}}>SignUp</Button>
                </div>
                </nav>
        </div>
    )
}