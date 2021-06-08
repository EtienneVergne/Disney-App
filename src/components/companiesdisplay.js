import React from 'react';
import {Col} from 'antd';

 const Companiesdisplay = (props) => {
  
  
    
        return (
            <Col span={4}>
            <div>
              <a href={props.link}><img  id={props.id} src={props.poster} alt="poster"/></a>  
            </div>
            </Col>
        )
    
    
}

export default Companiesdisplay
