import React from 'react';
import './Box.css';

const Box = ({ boundingBox }) => {
    const { leftCol, topRow, rightCol, bottomRow } = boundingBox;
    return (
        <div className='bounding-box' style={{
            left: leftCol,
            top: topRow,
            right: rightCol,
            bottom: bottomRow
        }}></div>
    )
}

export default Box;