import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div className='Input'>
            <div>
                <input
                    className='Image-input'
                    type='text'
                    onChange={onInputChange}
                />
                <button
                    className='Image-btn'
                    onClick={onImageSubmit}
                >Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;