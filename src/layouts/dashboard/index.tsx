import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/sidebar';

function Dashboard() {
  return (
    <Box
      display='flex'
    >
      <Sidebar />
      <Box width='100%'>
        <Header />
        <Container>
          <Outlet />
        </Container>

      </Box>
    </Box>
  )

}

export default Dashboard