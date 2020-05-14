import React from "react";
import "./Home.scss";
import TwitchPlayer from "../../components/Twitch/TwitchPlayer";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <TwitchPlayer />
    </div>
  );
};

export default Home;
