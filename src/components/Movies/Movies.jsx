import React, { useState, useEffect } from "react";
import MovieService from "../../service/MovieService";
import InformationCard from "../Information/InformationCard";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MovieService.getMovies().then((data) => {
      setMovies(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      Peliculas de Harry Potter
      <div>
        {movies.length !== 0 &&
          movies.map((movie) => {
            return (
              <InformationCard
                key={movie.id}
                image={movie.attributes.poster}
                title={movie.attributes.title}
                attributes={movie.attributes}
                type={movie.type}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Movies;
