import Hero from "./Hero";
import { Link } from "react-router-dom";


// 6408207b6c2cee35072b57aafee8b2a5

// https://api.themoviedb.org/3/search/movie?api_key=6408207b6c2cee35072b57aafee8b2a5&language=en-US&query=shrek&page=1&include_adult=false

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movie/${movie.id}`;
  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  function RenderPoster() {
    if (movie.poster_path == null) {
      return <img src={noImage} className="card-img-top" alt={movie.noImage} />;
    } else {
      return (
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
      );
    }
  }

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4 ">
      <div className="card h-100">
        <RenderPoster />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>

          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const noKey = `${keyword} Doesn't give any results. Look for another movie.`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} kei={i} />;
  });

  const RenderSearchResults = () => {
    if (searchResults.length > 0) {
      return (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      );
    } else {
      return (

        <h3 className="my-4 mx-5">{noKey}</h3>
      );
    }
  };

  return (
    <>
      <Hero text={title} />
      <RenderSearchResults />)
    </>
  );
};

export default SearchView;
