import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Nav.css';
function Nav() {
    return (
        <div className={classes.Nav}>
            <nav className={classes.Items}>
                <ul className={classes.Links}>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/skills">Skills</Link> </li>
                    <li> <Link to="/projects">Projects</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
