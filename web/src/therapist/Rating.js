import React from 'react';

/**
 * @param {{ name: string, value: string }} props
 */
const Rating = ({ name, value }) => {
    return (
        <>
            <p className='mb-0'>{name}</p>
            <div style={{ background: '#ddd', width: '100%', height: '0.5rem', borderRadius: '0.25rem', overflow: 'hidden' }}>
                <div className="w3-container w3-blue w3-round-xlarge" style={{ background: '#0d6efd', width: value.toString() + '%', height: '100%' }}></div>
            </div>
        </>
    )
}

export default Rating;