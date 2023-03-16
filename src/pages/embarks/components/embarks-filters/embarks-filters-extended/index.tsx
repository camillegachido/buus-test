import { useState, useEffect } from "react";

import { Grid, Box } from "@mui/material"
import { Dayjs } from "dayjs";

import { IEmbarkFilters } from "~/common/types/embarks";
import { Autocomplete, Select } from "~/components";
import { GetCars, GetDrivers } from "~/services/embarks";

import { options } from "../../../options"

const trip = [
  { label: '> 10min', value: 10 },
  { label: '> 30min', value: 30 },
  { label: '> 1h', value: 60 },
  { label: '> 2h', value: 120 }
]


interface IProps {
  filter: IEmbarkFilters;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersExtended({ filter, updateFilter }: IProps) {
  const [cars, setCars] = useState<string[]>([])
  const [drivers, setDrivers] = useState<string[]>([])

  useEffect(() => {
    setCars(GetCars())
    setDrivers(GetDrivers())
  }, [])

  return <Box
    bgcolor='#E8E8E8'
    padding='12px'
    data-testid={options.filterExpanded}>
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Autocomplete
          options={cars}
          value={filter.car}
          onChange={(value) => updateFilter("car", value)}
          label="Car flate"
        />
      </Grid>
      <Grid item xs={2}>
        <Autocomplete
          options={drivers}
          value={filter.driver}
          onChange={(value) => updateFilter("driver", value)}
          label="Driver"
        />
      </Grid>
      <Grid item xs={8}>
        <Select
          options={trip}
          value={filter.tripDuration}
          label='Trip duration'
          onChange={(value) => updateFilter("tripDuration", value)} />
      </Grid>

    </Grid>
  </Box>
}

export default EmbarksFiltersExtended