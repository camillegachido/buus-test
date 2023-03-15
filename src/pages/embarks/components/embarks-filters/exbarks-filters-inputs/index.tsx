import { Autocomplete, TextField, Grid } from "@mui/material"
import { Dayjs } from "dayjs";

import { DatePicker } from '~/components'
import { IFilterOptions } from "../../../types";

interface IProps {
  filter: IFilterOptions;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersInputs({ filter, updateFilter }: IProps) {
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
          options={[]}
          value={filter.route}
          onChange={(e, value) => updateFilter("route", value)}
          renderInput={(params) => <TextField {...params} size="small" label="Routes" fullWidth={true} />}
        />
      </Grid>
    </Grid>
  )
}

export default EmbarksFiltersInputs