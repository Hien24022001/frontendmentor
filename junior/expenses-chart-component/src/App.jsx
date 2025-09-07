import { useState } from 'react'
import logo from './assets/logo.svg'
import BarChart from './components/BarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='balance'>
      <div className='balance-container'>
        <div className='balance-info'>
          <div className='balance-text'>
            <span className='text-preset-5-regular'>My balance</span>
            <span className='text-preset-3'>$921.48</span>
          </div>
          <img src={logo} />
        </div>
      </div>
      <div className='spending-section'>
        <div className='spending-container'>
          <h3 className='text-preset-3'>Spending - Last 7 days</h3>
          <div className='chart-container'>
            <div className='bar-chart'>
              <BarChart />
            </div>
            <div className='total-section'>
              <div className='line'></div>
              <div className='total-info'>
                <p className='text-prest-5-regular brown'>Total this month </p>
                <div className='total-details'>
                  <span className='text-preset-2'>$478.33</span>
                  <div className='percentage'>
                    <p className='text-prest-5-bold'>+2.4%</p>
                    <p className='text-preset-5-regular brown'>from last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
