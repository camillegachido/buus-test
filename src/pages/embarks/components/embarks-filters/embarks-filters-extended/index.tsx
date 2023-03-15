import { Grid } from "@mui/material"
import { Dayjs } from "dayjs";
import { Autocomplete, Select } from "~/components";
import { IFilterOptions } from "~/pages/embarks/types";
import { options } from "../../../options"

interface IProps {
  filter: IFilterOptions;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersExtended({ filter, updateFilter }: IProps) {
  return <Grid container data-testid={options.filterExpanded}>
    <Grid item>
      <Autocomplete
        options={[]}
        value={filter.car}
        onChange={(value) => updateFilter("car", value)}
        label="Car flate"
      />
    </Grid>
    <Grid item>
      <Autocomplete
        options={[]}
        value={filter.driver}
        onChange={(value) => updateFilter("driver", value)}
        label="Driver"
      />
    </Grid>
    <Grid>
      <Select
        options={[]}
        value={filter.tripDuration}
        label='Trip duration'
        onChange={(value) => updateFilter("trip", value)} />
    </Grid>

  </Grid>
}

export default EmbarksFiltersExtended