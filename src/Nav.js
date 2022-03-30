import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt='Netflix Logo'
            />

            <img className="nav_avatar" src="https://cdn.pixabay.com/photo/2021/07/03/10/54/naruto-6383641_960_720.png" alt="Netflix logo" />

        </div>
    )
}

export default Nav 