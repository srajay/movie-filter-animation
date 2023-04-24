import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div layout>
      <h2>{movie.title}</h2>

      <p>Release Date : {movie.release_date}</p>
      <p>Rating : {movie.vote_average}</p>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
    </motion.div>
  );
};

export default Movie;
