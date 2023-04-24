import React from "react";
import { useEffect } from "react";

const Filter = ({ setActiveBtn, activeBtn, popular, setFiltered }) => {
  useEffect(() => {
    if (activeBtn === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeBtn)
    );
    setFiltered(filtered);
  }, [activeBtn]);
  return (
    <div className="filter-container">
      <button
        className={activeBtn === 0 ? "active" : ""}
        onClick={() => setActiveBtn(0)}
      >
        All
      </button>
      <button
        className={activeBtn === 35 ? "active" : ""}
        onClick={() => setActiveBtn(35)}
      >
        Comedy
      </button>
      <button
        className={activeBtn === 28 ? "active" : ""}
        onClick={() => setActiveBtn(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
