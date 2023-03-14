import { TextField } from "@mui/material"
import { ChangeEvent } from "react";

interface IProps {
  label: string;
  name: string;
  id: string;
  type?: string;
  error?: boolean;

  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input(props: IProps) {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        autoFocus
        data-testid={props.name}
        helperText={props.error ? 'Empty field!' : ''}
        {...props}
      />
    </>

  )
}

export default Input