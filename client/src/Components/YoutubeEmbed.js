import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
  <div className="main-div">
    <div className="video-responsive">
    <iframe
      width="300"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div></div>

);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;