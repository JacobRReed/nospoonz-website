import React from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import "./TwitchPlayer.scss";

const TwitchPlayer: React.FC = () => {
  return (
    <div className="TwitchPlayer">
      <ReactTwitchEmbedVideo channel="nospoonz" height="100%" width="100%" />
    </div>
  );
};

export default TwitchPlayer;
