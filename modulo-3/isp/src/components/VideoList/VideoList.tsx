import React from "react";
import {LiveStream, Video} from "../../types/video";
import { Thumbnail } from '../Thumbnail';
export interface VideoListProps {
	items: Video[] | LiveStream[];
}

// Opcional funcion para verificar la existencia de una propiedad en un objeto
function hasCoverUrl(item: Video | LiveStream): item is Video {
	return "coverUrl" in item;
}

const VideoList: React.FC<VideoListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => {
				if ("coverUrl" in item) {
					return <Thumbnail key={item.id} coverUrl={item.coverUrl} />;
				} else {
					return <Thumbnail key={item.id} coverUrl={item.previewUrl} />;
				}
			})}
		</ul>
	);
};

export default VideoList;
