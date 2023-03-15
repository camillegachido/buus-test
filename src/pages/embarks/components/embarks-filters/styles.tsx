import { Button } from "@mui/material"
import { styled } from '@mui/material/styles';

export const MoreFiltersButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  backgroundColor: '#E8E8E8',
  borderRadius: '40px',
  color: '#000',
  '&:hover': {
    backgroundColor: '#d9d9d9',
    borderColor: '#d9d9d9',
    boxShadow: 'none',
  },
})