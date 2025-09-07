import React from 'react'


function HomePage() {
  return (
    <div className='flex flex-col gap-[120px] px-6'>
      <section className='h-[500px] flex items-center px-6 home-hero'>
        <div className='flex flex-col gap-6 text-center'>
          <h2 className='text-preset-2 text-light-cream'>Great coffee made simple.</h2>
          <p className='text-body text-light-cream'>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan 
coffees from our best roasters delivered directly to your door, at your schedule.
          </p>
          <button className='btn'>Create Your Plan</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage