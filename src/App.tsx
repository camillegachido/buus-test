import { RouterProvider } from 'react-router-dom'
import router from '~/routes'
import './App.css';

import { localizationProvider } from './common/hocs'
import AuthProvider from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      {localizationProvider(<RouterProvider router={router} />)}
    </AuthProvider>

  )
}

export default App
