import { Typography, Box, Divider } from "@mui/material"
import { EmbarksFilter } from './components'

function Embarks() {
  return <>
    <Box marginBottom='40px'>
      <Typography variant="h5" component="h1">Embarks</Typography>
      <Typography variant='subtitle2' component="h2">List of embarks per trip</Typography>
      <Divider />
    </Box>
    <EmbarksFilter onApply={() => { }} />
  </>
}

export default Embarks