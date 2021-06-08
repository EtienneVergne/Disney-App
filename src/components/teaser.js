import React from 'react';
import { Modal } from 'antd';

const Teaser = ({video, isVisible}) => {
    
    let iframeVisible = isVisible ? "autoplay=1" : "autoplay=0";
    return (
        <div>
        <Modal  visible={isVisible} width="100%" footer={null} wrapClassName={"movie-modal"} title="video player">
           
            <iframe src={`${video}?${iframeVisible}&controls=1&showinfo=0&modestbranding=1&autohide=1`}  height="315" width="560" allow="autoplay" frameBorder="0" allowFullScreen>
            </iframe>
        </Modal>
        </div>
    )
}

export default Teaser;
