import React from 'react';

const UserInformation = ({ name, entries, faces, rank }) => {
    return (
        <>
            <span className='name-display'>${name}</span>
            <span className='entries-display'>No. of entries: ${entries}</span>
            <span className='faces-display'>No. of Faces: ${faces}</span>
            <span className='rank-display'>Rank: ${rank}</span>
        </>
    );
}

export default UserInformation;