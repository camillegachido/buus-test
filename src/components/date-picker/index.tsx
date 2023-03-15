import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

import { options } from './options'

interface IProps {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void
}

function DatePickerCalendar({ label, value, onChange }: IProps) {
  return (
    <div data-testid={options.test}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => onChange(newValue)}
        sx={{
          "& > div": {
            height: "40px"
          }
        }}
        format='DD/MM/YYYY'
      />
    </div>
  )
}

export default DatePickerCalendar