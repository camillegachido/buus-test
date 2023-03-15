import { useState } from "react"
import { Box, Typography, Button, Autocomplete, TextField, Grid } from "@mui/material"
import dayjs, { Dayjs } from "dayjs";

import { DatePicker } from '~/components'
import { MoreFiltersButton } from "./styles"
import { EmbarksFiltersExtended } from ".."
import { options } from "../../options"
import { IFilterOptions } from "../../types"

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

  return <Box data-testid={options.filter}>
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
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <DatePicker
          label="From"
          value={filter.from}
          onChange={(newValue) => updateFilter("from", newValue)}
        />
      </Grid>
      <Grid item xs={2}>
        <DatePicker
          label="To"
          value={filter.to}
          onChange={(newValue) => updateFilter("to", newValue)}
        />
      </Grid>
      <Grid item xs={8}>
        <Autocomplete
          options={[]}
          value={filter.route}
          onChange={(e, value) => updateFilter("route", value)}
          renderInput={(params) => <TextField {...params} size="small" label="Routes" fullWidth={true} />}
        />
      </Grid>
    </Grid>
    {openFilter && <EmbarksFiltersExtended />}
    <Button
      variant='outlined'
      onClick={() => onApply(filter)}>
      Apply
    </Button>
  </Box >
}

export default EmbarksFilters