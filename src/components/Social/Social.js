import React from 'react'
import classes from './Social.css';

import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Social() {
    return (
        <div className={classes.Social}>
            <li>
                <a href="/">
                    <FaGithub size={35} />
                </a>
                <a href="/">
                    <FaLinkedinIn size={35} />
                </a>
                <a href="/">
                    <FaTwitter size={35} />
                </a>
                <a href="/">
                    <FaInstagram size={35} />
                </a>
            </li>
        </div>
    )
}
