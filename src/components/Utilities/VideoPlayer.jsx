"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right bg-color-secondary mb-1 px-3"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  const buttonOpenPlayer = () => {
    return (
      <button className="fixed bottom-5 right-5 w-32 bg-color-secondary text-color-primary rounded-md" onClick={handleVideoPlayer}>
      Trailer
    </button>
    )
  }

  return isOpen ? <Player /> : buttonOpenPlayer()
};

export default VideoPlayer;
