import { useState } from 'react'
import PatternSquigglyLineTop from './assets/images/pattern-squiggly-line-top.svg'
import PatternSquigglyLineBottomDesktop from './assets/images/pattern-squiggly-line-bottom-desktop.svg'
import PatternSquigglyLineBottomMobile from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import Logo from './assets/images/logo-full.svg'
import TicketGenerator from './components/TicketGenerator'
import TicketGenerated from './components/TicketGenerated'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  return (
    <div className="min-h-screen text-neutral-0 relative bg-[url('./assets/images/background-mobile.png')] bg-no-repeat bg-cover bg-center bg-fixed pt-[33px] pb-[114px]" >
      <img src={PatternSquigglyLineTop} className='w-[112px] h-[52.23px] absolute top-[23.86px] right-0' />
      <img src={PatternSquigglyLineBottomMobile} className='w-[301px] h-[209.91px] absolute bottom-0 left-0 z-10' />
      <p className='text-center'>
        <img src={Logo} className='inline-block' />
      </p>
      <div className='relative z-20'>
        {
          isSubmitted ? (
            <TicketGenerated ticketData={ticketData} />
          ) : (
            <TicketGenerator submitForm={() => setIsSubmitted(true)} setTicketData={setTicketData} />
          )
        }
      </div>      
    </div>
  )
}

export default App
