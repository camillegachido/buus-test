import { Typography, Box } from "@mui/material"
import { EmbarksFilter } from './components'

function Embarks() {
  return <>
    <Box>
      <Typography variant="h5" component="h1">Embarks</Typography>
      <Typography variant='subtitle2' component="h2">List of embarks per trip</Typography>
    </Box>
    <EmbarksFilter />
  </>
}

export default Embarks