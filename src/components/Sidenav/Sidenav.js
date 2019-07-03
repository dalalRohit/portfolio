import React from 'react'
import classes from './Sidenav.css';
import Auxi from './../../hoc/Auxi/Auxi';
import Backdrop from './../UI/Backdrop/Backdrop';
import Social from './../Social/Social';
import Logo from './../UI/Logo/Logo';
import Item from './../Navigation/Item/Item';

export default function Sidenav(props) {
    let attachedClasses = [classes.Sidenav, classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidenav, classes.Open];
    }
    const links = {
        home: { name: "Home", to: "/" },
        about: { name: "About", to: "/about" },
        skills: { name: "Skills", to: "/skills" },
        projects: { name: "Projects", to: "/projects" },
        contact: { name: "Contact", to: "/contact" },
    }
    let linksToDisplay = Object.keys(links).map((link) => {
        return <Item
            click={props.click}
            key={Math.random()}
            to={links[link].to}
            name={links[link].name} />
    })
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
                        {linksToDisplay}
                    </ul>
                </nav>

                <div className={classes.Social}>
                    <Social />
                </div>
            </div>
        </Auxi>
    )
}
