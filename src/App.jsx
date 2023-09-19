
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import SimpleCharts from './components/SimpleCharts/SimpleCharts'

function App() {


  return (

    <div className='container mx-auto'>
      <NavBar></NavBar>
      <PricingOptions></PricingOptions>
      <SimpleCharts></SimpleCharts>
    </div>
  )
}

export default App
