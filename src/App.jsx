import { PrimeReactProvider } from 'primereact/api'
import Layout from './layout/Layout'
import { BreedProvider } from './context/BreedProvider'

function App() {
  
  return (
    <PrimeReactProvider>
      <BreedProvider>
        <Layout/>
      </BreedProvider>
    </PrimeReactProvider>
  )
}

export default App
