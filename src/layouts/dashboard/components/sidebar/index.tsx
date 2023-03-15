import { Box } from '@mui/material';

import Logo from '~/assets/icon.png';
import Map from '~/assets/map.png';

function Sidebar() {
  return (
    <>
      <Box
        width='75px'
        height='100vh'
        bgcolor='#E8E8E8'
        padding='16px'
        boxSizing='border-box'
        position='fixed'
      >
        <img
          alt="Buus logo"
          src={Logo}
          style={{ marginBottom: 24 }}
        />
        <img
          alt="Map icon"
          src={Map} />
      </Box>
    </>
  )

}

export default Sidebar