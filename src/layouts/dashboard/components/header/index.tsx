import { Typography, Box, Avatar } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '~/contexts/auth';

import User from '~/assets/user.png';

function Header() {
  const { username } = useContext(AuthContext)

  return (
    <>
      <Box padding='16px'>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
          <Typography color="inherit" variant='subtitle2'>Olá, {username}</Typography>
          <Avatar
            sx={{ width: 32, height: 32, marginLeft: '16px' }}
            src={User} />
        </Box>
      </Box>
    </>
  )

}

export default Header