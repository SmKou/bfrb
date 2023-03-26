import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        <> { isSignedIn? 
            <nav>
                <p
                    className='nav-link'
                    onClick={() => onRouteChange('signout')}
                >Sign Out</p>
            </nav>:
            <nav>
                <p
                    className='nav-link'
                    onClick={() => onRouteChange('register')}
                >Register</p>
                <p
                    className='nav-link'
                    onClick={() => onRouteChange('signin')}
                >Sign In</p>
            </nav>
        }
        </>
    )
}

export default Navigation;