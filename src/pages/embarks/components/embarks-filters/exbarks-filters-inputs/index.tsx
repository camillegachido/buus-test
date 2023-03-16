import { useEffect, useState } from "react"

import { Grid } from "@mui/material"
import { Dayjs } from "dayjs";

import { IEmbarkFilters } from "~/common/types/embarks";
import { DatePicker, Autocomplete } from '~/components'
import { GetRoutes } from "~/services/embarks";

interface IProps {
  filter: IEmbarkFilters;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersInputs({ filter, updateFilter }: IProps) {
  const [routes, setRoutes] = useState<string[]>([])

  useEffect(() => {
    setRoutes(GetRoutes())
  }, [])


  return (
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
          options={routes}
          value={filter.route}
          onChange={(value) => updateFilter("route", value)}
          label="Routes"
        />
      </Grid>
    </Grid>
  )
}

export default EmbarksFiltersInputs