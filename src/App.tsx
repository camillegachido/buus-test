import { RouterProvider } from 'react-router-dom'
import router from '~/routes'
import './App.css';

import { localizationProvider } from './hocs'

function App() {
  return (
    localizationProvider(<RouterProvider router={router} />)
  )
}

export default App
