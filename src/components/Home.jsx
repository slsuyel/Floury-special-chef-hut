import React from 'react';

import hero from '../assets/hero.jpg'

const Home = () => {
    return (
        <div>
            <img src={hero} alt="" draggable={false} className='img-fluid w-100' />
        </div>
    );
};

export default Home;