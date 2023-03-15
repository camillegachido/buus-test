import { Grid, Box } from "@mui/material"
import { Dayjs } from "dayjs";

import { Autocomplete, Select } from "~/components";
import { IFilterOptions } from "~/pages/embarks/types";
import { options } from "../../../options"

interface IProps {
  filter: IFilterOptions;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersExtended({ filter, updateFilter }: IProps) {
  return <Box
    bgcolor='#E8E8E8'
    padding='12px'
    data-testid={options.filterExpanded}>
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Autocomplete
          options={[]}
          value={filter.car}
          onChange={(value) => updateFilter("car", value)}
          label="Car flate"
        />
      </Grid>
      <Grid item xs={2}>
        <Autocomplete
          options={[]}
          value={filter.driver}
          onChange={(value) => updateFilter("driver", value)}
          label="Driver"
        />
      </Grid>
      <Grid item xs={8}>
        <Select
          options={[]}
          value={filter.tripDuration}
          label='Trip duration'
          onChange={(value) => updateFilter("trip", value)} />
      </Grid>

    </Grid>
  </Box>
}

export default EmbarksFiltersExtended