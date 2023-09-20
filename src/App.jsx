
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PricingOptions from './components/PricingOptions/PricingOptions'
import SimpleCharts from './components/SimpleCharts/SimpleCharts'

function App() {


  return (

    <div className='container mx-auto'>
      <NavBar></NavBar>
      <PricingOptions></PricingOptions>
      <SimpleCharts></SimpleCharts>
      <Phones></Phones>
    </div>
  )
}

export default App
