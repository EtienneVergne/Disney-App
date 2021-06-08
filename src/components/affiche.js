import React from 'react';

const Affiche = ({id, highlighted, cover}) =>{

    return (


         <div className="encart-affiche">
        <img src={cover} className="banniere" alt="banniere-film"/>
        </div>
    )

    

}

export default Affiche