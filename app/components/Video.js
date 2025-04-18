import React from 'react';

const VideoPlayer = ({link}) => (
  <div>
    <video width="600" controls>
      <source src={link} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPlayer;