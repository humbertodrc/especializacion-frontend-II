import React from 'react';
import { Video } from '../../types/video';
export interface ThumbnailProps {
	coverUrl: string;
}

const Thumbnail : React.FC<ThumbnailProps> = ({coverUrl}) => {
	return <img src={coverUrl} style={{marginLeft: "15px"}} />
};

export default Thumbnail;
