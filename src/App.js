import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Movielist from "./components/movielist/Movielist";
import Home from "./pages/Home/Home";
import Movie from "./pages/movieDetail/movie";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>{" "}
          <Route path="movie/:id" element={<Movie />}>
            {" "}
          </Route>{" "}
          <Route path="movies/:type" element={<Movielist />}>
            {" "}
          </Route>{" "}
          <Route path="/*" element={<h1> Error Page </h1>}></Route>
        </Routes>{" "}
        <Footer />
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
