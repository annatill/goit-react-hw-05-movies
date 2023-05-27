import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Icon, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Icon />
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
