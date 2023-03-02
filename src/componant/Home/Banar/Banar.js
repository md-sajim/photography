import React from 'react';
import './Banar.css'
import img from '../../../asset/banar-asset/banar-img-1.jpg'
import './Banar.css'

const Banar = () => {
    return (
        <div className='banar-container'>
            <div className='banar-suncontainer'>
                <div id='banar-frist-section'>
                    {/* <img src={img} alt="" /> */}
                    <div className='img-after'></div>
                </div>
                <div id='banar-second-section'>
                    <div>
                        <h1 id='text-header'>Photogaphy Helps <br /> People to see</h1>
                        <p id='banat-text'>Your story deserves to be told in a way that's real for you. you've found your twin flame, your mirror soul, and that's something that deserves to be immortalized through photography and film. i want to capture this connection and tell your story in its truest form. That way, when you look lack in 10, 20, even 50 years, you'll know it was real.</p>
                    </div>
                </div>
            </div>
            {/* <h1 id='banar-hader'>Photogaphy Helps <br /> People to see</h1> */}
        </div>
    );
};

export default Banar;