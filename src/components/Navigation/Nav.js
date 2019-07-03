import React from 'react'
import Item from './Item/Item';

import classes from './Nav.css';
function Nav() {
    const links = {
        home: { name: "Home", to: "/" },
        about: { name: "About", to: "/about" },
        skills: { name: "Skills", to: "/skills" },
        projects: { name: "Projects", to: "/projects" },
        contact: { name: "Contact", to: "/contact" },
    }
    let linksToDisplay = Object.keys(links).map((link) => {
        return <Item
            key={Math.random()}
            to={links[link].to}
            name={links[link].name} />
    })
    return (
        <div className={classes.Nav}>
            <nav className={classes.Items}>
                <ul className={classes.Links}>
                    {linksToDisplay}
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
