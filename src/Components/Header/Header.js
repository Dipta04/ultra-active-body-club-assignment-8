import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faSwimmer}></FontAwesomeIcon>
            <h1>Ultra-Activities-Active-Club</h1>   
        </div>
    );
};

export default Header;