import { Autocomplete, AutocompleteInputChangeReason, TextField } from "@mui/material";
import { useCallback } from "react";

import { options as test } from './options';

interface IProps {
  options: string[];
  value: string;
  onChange: (value: string | null) => void;
  label: string
}

function StyledAutocomplete({ options, value, onChange, label }: IProps) {
  const newOptions = ['All', ...options];

  const onInputChange = useCallback((e: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
    if (newValue)
      onChange(newValue)
    else
      onChange('All')
  }, [])

  return <div data-testid={test.autocomplete}>
    <Autocomplete
      options={newOptions}
      value={value}
      onChange={onInputChange}
      renderInput={(params) => <TextField {...params} size="small" label={label} fullWidth={true} />}
    />
  </div>
}

export default StyledAutocomplete