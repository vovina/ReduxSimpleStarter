import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Loading</div>; //this should be on a very parent component
    }
    const videoId = video.id.videoId;
    //const url = "https://www.youtube.com/embed/" + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;    

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
        </div> 
    );
}

export default VideoDetail;