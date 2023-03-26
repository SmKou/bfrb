import React from 'react';
import Box from './Box';
import './FaceRecognition.css';

const FaceRecognition = ({ box, imgUrl }) => {
    let w = (imgUrl)? document.getElementById('Image').offsetWidth: 0;
    let h = (imgUrl)? document.getElementById('Image').offsetHeight: 0;
    return (
        <div className='Image-container' width={w} height={h}>
            <img id='Image' src={imgUrl} alt='upload image with faces' />
            { box?
                box.map((b, i) => {
                    return (<Box key={`Box-${i}`} boundingBox={b} />);
                }):
                console.log(box)
            }
        </div>
    )
}

export default FaceRecognition;