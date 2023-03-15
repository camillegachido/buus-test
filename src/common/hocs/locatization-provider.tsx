import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const localizationProvider = (children: JSX.Element) => {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>
    {children}
  </LocalizationProvider>
}

export default localizationProvider