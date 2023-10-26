import React from 'react';
import { Video } from '../../types/video';
export interface ThumbnailProps {
	video: Video;
}

const Thumbnail : React.FC<ThumbnailProps> = ({video}) => {
	return <img src={video.coverUrl} style={{marginLeft: "15px"}} />
};

export default Thumbnail;
