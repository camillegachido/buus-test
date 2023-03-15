import { Typography, Box, Avatar } from '@mui/material';


function Header() {
  return (
    <>
      <Box padding='16px'>
        <Box display='flex' justifyContent='flex-end' alignItems='center'>
          <Typography color="inherit" variant='subtitle2'>João Moraes</Typography>
          <Avatar
            sx={{ width: 24, height: 24, marginLeft: '16px' }}
            alt="Remy Sharp" src="/static/assets/icon.png" />
        </Box>
      </Box>
    </>
  )

}

export default Header