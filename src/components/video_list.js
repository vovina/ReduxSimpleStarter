import React from 'react';
import VideoItem from './video_item';

const VideoList = (props)=>{

    const videoList = props.videos.map (video => {
       return (
            <VideoItem 
                onVideoSelect = {props.onVideoSelect}
                video={video} 
                key={video.etag}/> 
       );    
    });

    return(
        <ul className="col-md-4 list-group">   
               {videoList}                
        </ul>
    );
}

export default VideoList;