
import YouTube from "react-youtube";

import styled from "styled-components";


const VideoOverlay = styled.div`
  width: 100%;
  height: 300px;
`;
function RecipeVideo({ youtube, handelVideo }) {
  const opts = {
    height: "300px",
    width: "100%",
    loading: "Loading",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const id = youtube.split("=")[1];

  return (
    <VideoOverlay>
      <YouTube videoId={id} opts={opts} />
    </VideoOverlay>
  );
}

export default RecipeVideo;
