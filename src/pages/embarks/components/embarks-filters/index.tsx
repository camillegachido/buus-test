import { useState } from "react"
import { Box, Typography, Button } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";

import { MoreFiltersButton } from "./styles"
import { EmbarksFiltersExtended } from ".."
import { options } from "../../options"
import EmbarksFiltersInputs from "./exbarks-filters-inputs";
import { IEmbarkFilters } from "~/common/types/embarks";

interface IProps {
  onApply: (data: IEmbarkFilters) => void
}

function EmbarksFilters({ onApply }: IProps) {
  const [filter, setFilter] = useState<IEmbarkFilters>({
    car: 'All',
    route: 'All',
    from: dayjs(new Date('2022-01-01')),
    to: dayjs(new Date('2022-12-31')),
    driver: 'All',
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
      {openFilter && <EmbarksFiltersExtended updateFilter={updateFilter} filter={filter} />}
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