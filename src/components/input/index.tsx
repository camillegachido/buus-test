import { TextField } from "@mui/material"

interface IProps {
  label: string;
  name: string;
  id: string;
  type?: string;
}

function Input(props: IProps) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      autoFocus
      data-testid="input"
      {...props}
    />
  )
}

export default Input