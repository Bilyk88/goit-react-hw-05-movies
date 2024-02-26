import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
import { Toaster } from 'react-hot-toast';
// import { Reviews } from './Reviews';
import { Header, StyledLink } from './Header.styled';
import { Loader } from './Loader/Loader';
// import { Cast } from './Cast/Cast';

const Home = lazy(() => import('../pages/Home'));

const Movies = lazy(() => import('../pages/Movies'));

const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
          <Toaster position="top-right" />
        </Suspense>
      </main>
    </div>
  );
};
