import React from 'react'
import classes from './Sidenav.css';
import Auxi from './../../hoc/Auxi/Auxi';
import Backdrop from './../UI/Backdrop/Backdrop';
import Social from './../Social/Social';
import Logo from './../UI/Logo/Logo';
import { Link } from 'react-router-dom';
export default function Sidenav(props) {
    let attachedClasses = [classes.Sidenav, classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidenav, classes.Open];
    }
    return (
        <Auxi>
            <Backdrop
                click={props.click}
                show={props.show} />

            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.Items}>
                    <ul className={classes.Links}>
                        <li onClick={props.click}> <Link to="/">Home</Link> </li>
                        <li onClick={props.click}> <Link to="/about">About</Link> </li>
                        <li onClick={props.click}> <Link to="/skills">Skills</Link> </li>
                        <li onClick={props.click}> <Link to="/projects">Projects</Link> </li>
                        <li onClick={props.click}> <Link to="/contact">Contact</Link> </li>
                    </ul>
                </nav>

                <div className={classes.Social}>
                    <Social />
                </div>
            </div>
        </Auxi>
    )
}
