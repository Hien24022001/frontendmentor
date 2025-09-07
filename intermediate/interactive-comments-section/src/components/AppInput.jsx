import React, { useState } from 'react'

function AppInput({ value, setValue }) {

  return (
    <textarea 
        placeholder='Add a comment...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='px-4 py-2 border border-grey-100 rounded-lg w-full min-h-[96px]'
    />
  )
}

export default AppInput