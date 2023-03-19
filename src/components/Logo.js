import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain-icon.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='Logo'>
            <Tilt tiltMaxAngleX={45} tiltMaxAngleY={45} style={{width: '50px'}}>
                <div className='tilt'>
                    <img src={Brain} alt="BFRB" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;