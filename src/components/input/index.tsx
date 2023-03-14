import { TextField } from "@mui/material"

interface IProps {
  label: string;
  name: string;
  id: string;
  type?: string;
  error?: boolean;

  value: string;
  onChange: () => void
}

function Input(props: IProps) {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        autoFocus
        data-testid="input"
        helperText={props.error ? 'Empty field!' : ''}
        {...props}
      />
    </>

  )
}

export default Input