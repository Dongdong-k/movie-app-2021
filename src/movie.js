import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

// movie component는 state가 필요 없음 - app에서 state 값 받아옴 => className 쓸 필요 없음

function Movie({ id, title, year, rating, image, summary, genres }) {
  return (
    <div className="movie">
      <img className="movie__image" src={image} alt={title} title={title}></img>
      <div className="movie__date">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genres, index) => (
            <li key={index} className="movie__genres_genre">
              {genres}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
