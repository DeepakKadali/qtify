import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import Grid from "@mui/material/Grid";

const Section = () => {
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );
        setAlbumData(response.data);
      } catch (error) {
        console.log(error);
        console.log(error.response.message);
      }
    };
    onLoad();
  }, []);

  return (
    <div>
      <Grid container>
        {albumData &&
          albumData.map((item) => {
            return (
              <Grid key={item.id} item lg={12 / 7}>
                <AlbumCard data={item} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Section;
