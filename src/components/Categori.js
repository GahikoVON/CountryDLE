import React from 'react';
import { NavLink } from 'react-router-dom';

const Categori = ({Cat}) => {
  

    return (
        <div className='categori'> 
            <img src={Cat[0]} alt="point interogation" className='imageDLE' onClick={()=><NavLink to="/about"/>}></img>
            <div onClick={()=><NavLink to="/about"/>}>
                <NavLink to={"/DLE/"+Cat[1]}>
                    <h2>{Cat[1]}</h2>
                </NavLink>
                
                <p>{Cat[2]}</p>
            </div>
        </div>
    );
};

export default Categori;