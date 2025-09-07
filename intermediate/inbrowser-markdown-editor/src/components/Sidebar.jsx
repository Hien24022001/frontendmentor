import React, { useContext, useState } from 'react'
import IconDocument from '../assets/images/icon-document.svg'
import { AppContext } from '../AppProvider'
import AddDocument from './AddDocument';

function Sidebar() {
  const { documents, selectDocument, selectedId } = useContext(AppContext);

  return (
    <section className='bg-black-900 w-[250px] min-h-screen'>
      <div className='flex flex-col justify-between p-6'>
        <div className='flex flex-col gap-6'>
          <span className='heading-S text-black-500'>MY DOCUMENTS</span>
          <AddDocument />
          <div className='flex flex-col gap-4'>
            {
              documents.map((item) => (
                <div key={item.id} className='flex items-center gap-4'>
                  <img src={IconDocument} />
                  <div className='flex flex-col'>
                    <span className='body-M text-black-500'>Document Name</span>
                    <span 
                      className={`heading-M cursor-pointer ${selectedId === item.id ? 'text-orange' : 'text-black-100'} `}
                      onClick={() => selectDocument(item.id)}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Sidebar