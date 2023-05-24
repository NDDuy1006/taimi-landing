import { useEffect } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YoutubePlayer = ({ id, title, ...others }) => {
  useEffect(() => {
    const player = document.querySelector("article");
    player.style.background = 'none';
    player.style.setProperty('--background', `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`);
  }, []);

  return <LiteYouTubeEmbed id={id} title={title} {...others} />;
};

export default YoutubePlayer;
