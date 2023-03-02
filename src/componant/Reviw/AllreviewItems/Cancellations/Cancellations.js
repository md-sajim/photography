import React from 'react';

const Cancellations = () => {
    const arr = '';
    return (
        <div>
            <h1>My cancalation</h1>
            {

              !arr &&  <div style={{ height: "70vh" }} className='d-flex justify-content-center align-items-center mute  text-secondary'>
                    <h2 className='border border-1 p-4 rounded'>not available</h2>
                </div>
            }
        </div>
    );
};

export default Cancellations;