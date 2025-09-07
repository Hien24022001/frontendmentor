import { useState } from 'react'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Modal from './components/Modal'

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  }

  const closeModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className='flex flex-col gap-8 p-6 bg-rose-50 md:p-10 lg:px-10 lg:py-22 lg:flex-row lg:gap-8 lg:items-start'>
      <Menu />
      <Cart openModal={openModal} />
      {isShowModal && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default App
