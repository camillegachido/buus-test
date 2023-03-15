import { useState } from "react"
import { Box, Typography } from "@mui/material"

import { MoreFiltersButton } from "./styles"
import { EmbarksFiltersExtended } from ".."
import { options } from "../../options"

function EmbarksFilters() {
  const [openFilter, setOpenFilter] = useState(false)

  return <Box data-testid={options.filter}>
    <Box display='flex' justifyContent='space-between'>
      <Typography>Date</Typography>
      <MoreFiltersButton
        size="small"
        variant="contained"
        onClick={() => setOpenFilter(!openFilter)}
      >
        More filters
      </MoreFiltersButton>
    </Box>
    {openFilter && <EmbarksFiltersExtended />}
  </Box>
}

export default EmbarksFilters