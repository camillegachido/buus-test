import { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";

import { MoreFiltersButton } from "./styles"
import { EmbarksFiltersExtended } from ".."
import { options } from "../../options"
import { IFilterOptions } from "../../types"
import EmbarksFiltersInputs from "../exbarks-filters-inputs";

interface IProps {
  onApply: (data: IFilterOptions) => void
}

function EmbarksFilters({ onApply }: IProps) {
  const [filter, setFilter] = useState<IFilterOptions>({
    car: '',
    route: '',
    from: dayjs(new Date()),
    to: dayjs(new Date()),
    driver: '',
    tripDuration: 0
  })

  const [openFilter, setOpenFilter] = useState(false)

  const updateFilter = (key: string, value: string | number | Dayjs | null) => {
    setFilter({ ...filter, [key]: value })
  }

  return (
    <Box
      data-testid={options.filter}
      display='flex'
      flexDirection='column'
      rowGap='8px'
    >
      <Box display='flex' justifyContent='space-between'>
        <Typography>Date</Typography>
        <MoreFiltersButton
          size="small"
          variant="contained"
          onClick={() => setOpenFilter(!openFilter)}
        >
          {openFilter ? 'Hide filters' : 'More filters'}
        </MoreFiltersButton>
      </Box>
      <EmbarksFiltersInputs updateFilter={updateFilter} filter={filter} />
      {openFilter && <EmbarksFiltersExtended />}
      <Box display='flex' justifyContent='flex-end'>
        <Button
          variant='text'
          onClick={() => onApply(filter)}
        >
          Apply
        </Button>
      </Box>
    </Box >
  )
}

export default EmbarksFilters