import React from 'react'
import logo from '../assets/shared/logo.svg'
import Countdown from './Countdown'
import AppForm from './AppForm'

function SignUpPage() {
  return (
    <div className='min-h-screen relative z-20 overflow-x-hidden bg-neutral-50'>
        <div className='hidden lg:block absolute top-0 right-0 bg-neutral-900 z-10 bg-image-footer-1'></div>
        <div className='flex flex-col gap-[80px] lg:gap-[140px] lg:items-center'>
            <nav className='flex justify-center md:justify-start pt-[40px] md:pt-[64px] md:px-[40px] lg:pt-[80px] lg:w-[1110px]'>
                <img src={logo} />
            </nav>
            <div className='flex flex-col gap-[80px] lg:flex-row lg:justify-between lg:items-center'>
                <div className='flex flex-col items-center gap-10 px-4 md:px-[40px] lg:items-start'>
                    <div className='flex flex-col gap-6 text-center md:w-[540px] lg:text-left'>
                        <h2 className='text-preset-1-tablet lg:text-[56px]'>
                            Work smarter. Save time.
                        </h2>
                        <p className='text-preset-3 text-neutral-500'>
                            Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.
                        </p>
                    </div>
                    <Countdown pattern={2} />
                </div>
                <AppForm />
            </div>
        </div>
    </div>
  )
}

export default SignUpPage