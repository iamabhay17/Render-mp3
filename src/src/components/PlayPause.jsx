import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({
  song,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
}) => (
  <div>
    {isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle className="text-4xl text-white" onClick={handlePause} />
    ) : (
      <FaPlayCircle className="text-4xl text-white" onClick={handlePlay} />
    )}
  </div>
);

export default PlayPause;
