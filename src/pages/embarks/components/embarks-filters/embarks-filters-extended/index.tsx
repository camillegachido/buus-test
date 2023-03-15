import { Box } from "@mui/material"
import { Dayjs } from "dayjs";
import { IFilterOptions } from "~/pages/embarks/types";
import { options } from "../../../options"

interface IProps {
  filter: IFilterOptions;
  updateFilter: (key: string, value: string | number | Dayjs | null) => void
}

function EmbarksFiltersExtended({ filter, updateFilter }: IProps) {
  return <Box data-testid={options.filterExpanded}></Box>
}

export default EmbarksFiltersExtended