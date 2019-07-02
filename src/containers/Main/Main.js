import React, { Component } from 'react'
import classes from './Main.css';

export default class Main extends Component {
    render() {
        return (
            <div className={classes.Main}>
                <p>MAIN CONTENT HERE</p>
                <li>Home</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </div>
        )
    }
}
