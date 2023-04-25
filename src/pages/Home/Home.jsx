import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import Movielist from "../../components/movielist/Movielist";
import "./home.css";
import Upcoming from "../../components/movielist/Upcoming";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchApi = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=67c01f467280d55145d984f5e94ae52a"
    );

    console.log(data);
    setPopularMovies(data.results);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          swipeable={true}
          draggable={false}
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <div className="Hero_banner">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
                key={movie.id}
              >
                <div className="posterImage ">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      <Movielist />
      <Upcoming />
    </>
  );
};

export default Home;
