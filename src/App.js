import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./App.css";

// className component 작성
// return 반환하지 않음
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // async : api로부터 데이터를 받아오는 것처럼 프로그램 실행시 시간이 걸려 실행완료 될때까지 기다려야 된다는 의미
  //  async : 비동기 함수로 특정 동작시까지 기다림 필요, await : 해당 위치 코드가 실행될때까지 기다려라
  async getMovies() {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); // old version
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log("api 데이터 로딩 완료");
    this.setState({ movies, isLoading: false }); // this.setState({movies : movies}) 동일 의미
  }

  componentDidMount() {
    // API 로부터 데이터 받기 & 변수 할당
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // Es6 기능, 변수에 state 할당
    return (
      <div>
        {isLoading ? (
          <div className="Loader">
            <span className="loader__text"> Loading... </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                year={movie.year}
                summary={movie.summary}
                image={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
