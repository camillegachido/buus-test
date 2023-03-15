import { Autocomplete, TextField } from "@mui/material";

import { options as test } from './options';

interface IProps {
  options: string[];
  value: string;
  onChange: (value: string | null) => void;
  label: string
}

function StyledAutocomplete({ options, value, onChange, label }: IProps) {
  const newOptions = ['All', ...options];

  return <div data-testid={test.autocomplete}><Autocomplete
    options={newOptions}
    value={value}
    onChange={(e, newValue) => onChange(newValue)}
    renderInput={(params) => <TextField {...params} size="small" label={label} fullWidth={true} />}
  />
  </div>
}

export default StyledAutocomplete