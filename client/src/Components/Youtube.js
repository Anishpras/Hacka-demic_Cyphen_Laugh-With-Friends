import React, { useEffect, useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import youtubeData from "../Data/YoutubeId";
const Youtube = () => {
  return (
    <div className="youtube">
    <center> {youtubeData.map((data) => (
      <div className="youtube-content">
        <h1 className="name">{data.name}</h1>
        <YoutubeEmbed embedId={data.link} />
      </div>
    ))}</center>
     
    </div>
  );
};

export default Youtube;
