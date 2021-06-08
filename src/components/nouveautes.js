import React from 'react';


 const Nouveautes = (props) => {
    return (
        
            

        <div className="newMovie" >
            <a href={props.link}><img src={props.new}  alt="" /></a>
            
        </div>
        
    )
}

export default Nouveautes;
