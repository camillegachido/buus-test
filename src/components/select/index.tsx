import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { options as test } from './options';

interface IOption {
  value: number;
  label: string
}

interface IProps {
  label: string;
  options: IOption[];
  value: string;
  onChange: (value: string) => void;
}


function StyledSelect({ label, options, value, onChange }: IProps) {
  const newOptions = [{ label: 'All', value: 0 }, ...options];

  return (<FormControl fullWidth data-testid={test.select}>
    <InputLabel id={label}>Age</InputLabel>
    <Select
      labelId={label}
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
    >
      {newOptions.map(option => <MenuItem
        value={option.value}
        key={`option-${label}-${option.value}`}
      >
        {option.label}
      </MenuItem>)}
    </Select>
  </FormControl>)
}

export default StyledSelect