import React from "react";
import { Tooltip } from "@mui/material";

import "./AlbumCard.css";
const AlbumCard = ({ data }) => {
  const { image, follows, title, songs } = data;
  return (
    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
      <a href="/" className="anchor">
        <div className="album-container">
          <div className="album-card">
            <img
              className="album-image"
              src={image}
              alt={title}
              loading="lazy"
            />
            <div className="album-merits">
              <div className="follows-chip">{`${follows} Follows`}</div>
            </div>
          </div>
          <div className="album-title">{data.title}</div>
        </div>
      </a>
    </Tooltip>
  );
};

export default AlbumCard;
