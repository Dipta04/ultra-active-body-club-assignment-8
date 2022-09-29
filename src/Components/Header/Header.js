import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className='header'>
            <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
            <h1>Ultra-Activities-Active-Club</h1> 
            </div>
            <div>
               <h3>Select Today's Exercise.</h3>
            </div>
        </div>
    );
};

export default Header;