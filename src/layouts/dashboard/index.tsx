import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';

function Dashboard() {
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