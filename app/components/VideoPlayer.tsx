// app/components/VideoPlayer.tsx

import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
  title: string;
  episodes: { id: string; title: string; url: string }[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, episodes }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [quality, setQuality] = useState('720p');
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  const playerRef = useRef<ReactPlayer>(null);

  const handleQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuality(e.target.value);
    // Logic to change the video URL based on quality can be added here
  };

  const handleEpisodeChange = (episode: { id: string; title: string; url: string }) => {
    setSelectedEpisode(episode);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <ReactPlayer
        ref={playerRef}
        url={selectedEpisode.url}
        playing={playing}
        controls
        volume={volume}
        width="100%"
        height="500px"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <div className="flex justify-between items-center w-full mt-4">
        <div>
          <label htmlFor="quality" className="mr-2">Quality:</label>
          <select id="quality" value={quality} onChange={handleQualityChange}>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
            <option value="480p">480p</option>
          </select>
        </div>
        <div>
          <label htmlFor="volume" className="mr-2">Volume:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Episodes</h2>
        <ul className="list-disc pl-5">
          {episodes.map((episode) => (
            <li key={episode.id} className="cursor-pointer" onClick={() => handleEpisodeChange(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoPlayer;
