import React from 'react';
import Categori from './Categori';

const Categoris = () => {
    const Cat=[["point_interogation.webp","Classique","Des indices à chauqe essai"],['drapeau.webp',"Drapeau","Avec un drapeau en jeu"]];

        
        return (
            <div>
                <Categori key="1" Cat={Cat[0]}/>
                <Categori key="2" Cat={Cat[1]}/>
            </div>
         
        );
};


export default Categoris;