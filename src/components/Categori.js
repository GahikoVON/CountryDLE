import React from 'react';

const Categori = ({Cat}) => {
  

    return (
        <div className='categori'> 
            <img src={Cat[0]} alt="point interogation" className='imageDLE'></img>
            <div>
                <h2>{Cat[1]}</h2>
                <p>{Cat[2]}</p>
            </div>
        </div>
    );
};

export default Categori;