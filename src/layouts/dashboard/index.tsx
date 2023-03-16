import { Box, Container } from '@mui/material';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '~/contexts/auth';
import Header from './components/header';
import Sidebar from './components/sidebar';

function Dashboard() {
  const { username } = useContext(AuthContext)

  if (username === '') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Sidebar />
      <Box
        paddingLeft='75px'
        width='100%'
        boxSizing='border-box'
      >
        <Header />
        <Container>
          <Outlet />
        </Container>

      </Box>
    </>

  )

}

export default Dashboard