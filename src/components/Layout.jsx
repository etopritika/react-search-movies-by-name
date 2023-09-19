import { Outlet } from 'react-router-dom';
import { Link, Main, Header } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
