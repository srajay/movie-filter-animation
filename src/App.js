import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeBtn, setActiveBtn] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f0b7aa565a430b30f7daa98f52346d87&language=en-US&page=1"
    );
    const movies = await data.json();

    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <motion.div layout className="popular-movie">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </div>
  );
}

export default App;
