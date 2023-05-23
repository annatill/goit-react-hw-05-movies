import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container } from '../App/App.styled';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </Container>
  );
};
