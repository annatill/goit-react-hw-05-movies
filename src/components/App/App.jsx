import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import { Container } from '../App/App.styled';

export const App = () => {
  return (
    <Container>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:movieId" element={<div>Movie Details</div>} />
      </Routes>
    </Container>
  );
};
