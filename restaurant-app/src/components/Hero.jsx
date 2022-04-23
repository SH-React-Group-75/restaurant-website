import React from 'react';
import '../CSS/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return ( 
        <div className='hero-section'>
            <div className="hero-content">
                <div className="hero-intro">
                    <h1 className="title">Good food choices are good investments</h1>
                    <p className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, commodi reiciendis est iste itaque dignissimos!</p>
                    <div className="action-btns">
                        <button className="reserve-table">Reserve Table</button>
                        <p>Some few tables remaining. Be fast!!</p>
                        <button className="direct-btn"><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;