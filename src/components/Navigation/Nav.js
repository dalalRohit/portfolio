import React from 'react'
import classes from './Nav.css';
function Nav() {
    return (
        <div className={classes.Nav}>
            <nav className={classes.Items}>
                <ul className={classes.Links}>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/">Home</a> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
