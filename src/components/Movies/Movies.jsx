import { useState, useEffect } from "react";
import MovieService from "../../service/MovieService";
import InformationCard from "../Information/InformationCard";
import Skeleton from '@mui/material/Skeleton';
import { Grid } from "@mui/material";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
   if(localStorage.getItem("movies") === null){
      MovieService.getMovies().then((data) => {
        setMovies(data.data);
        localStorage.setItem("movies", JSON.stringify(data.data));
      });
    }else{
      setMovies(JSON.parse(localStorage.getItem("movies")));
    }
  }, []);
  let tempArray = [1,2,3,4];
  return (
    <div style={{ marginTop: "190px" }}>
      <h2>Peliculas de harry potter</h2>
      <Grid container spacing={2}>
        {movies.length !== 0 ? (
          movies.map((movie) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <InformationCard
                  key={movie.id}
                  image={movie.attributes.poster}
                  title={movie.attributes.title}
                  attributes={movie.attributes}
                  type={movie.type}
                />
              </Grid>
            );
          })): (
            tempArray.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                     <Skeleton variant="rectangular" width={410} height={518} />
                </Grid>
              );
            })
          )}
      </Grid>
    </div>
  );
};

export default Movies;
