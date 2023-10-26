import React from "react";
import {Video} from "../../types/video";
import { Thumbnail } from '../Thumbnail';
export interface VideoListProps {
	items: Video[];
}

const VideoList: React.FC<VideoListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<Thumbnail key={item.title} video={item} />
			))}
		</ul>
	);
};

export default VideoList;
