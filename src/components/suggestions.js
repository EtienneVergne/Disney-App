


import React from 'react'

 const Suggestions = ({sug1,sug2,sug3}) => {
 
        return (
            <div>
            <h2>Suggestions</h2>
             <div className="suggestions">
            <img src={sug1} alt=""/>
            <img src={sug2} alt=""/>
            <img src={sug3} alt=""/>
            </div>

            </div>
            
        
    )
}

export default Suggestions;
