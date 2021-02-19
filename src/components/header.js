import React from 'react';
import './myStyles.css';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

function Header() {


    return (

        <Navbar bg="light" expand='lg' className="justify-content-around">

            <Navbar.Text>
                Weather App
                    </Navbar.Text>

            <Navbar.Text >
                <Link to="/Weather">Weather</Link>
            </Navbar.Text>
            <Navbar.Text>
                <Link to="/About">About</Link>

            </Navbar.Text>
        </Navbar>


    );

}

export default Header;
