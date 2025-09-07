import { use, useEffect, useState } from 'react'
import { initialExtentionList } from './utils/consts'
import Header from './components/Header'
import Filter from './components/Filter'
import Extension from './components/Extension'

function App() {
  const [status, setStatus] = useState('all');
  const [extensionList, setExtensionList] = useState(initialExtentionList);
  const [filteredExtension, setFilteredExtension] = useState([]);

  const handleToggle = (id) => {
    setExtensionList((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    )
  }

  const handleRemove = (id) => {
    setExtensionList((prev) =>
      prev.filter((item) => item.id !== id)
    )
  }

  useEffect(() => {
    if (status === 'all') {
      setFilteredExtension(extensionList);
    }
    else if (status === 'active') {
      setFilteredExtension(extensionList.filter(item => item.isActive));
    }
    else if (status === 'inactive') {
      setFilteredExtension(extensionList.filter(item => !item.isActive));
    }
  }, [status, extensionList]);

  return (
    <div className='flex flex-col gap-16 pt-5 md:pt-6 lg:pt-10 px-4 md:px-8 lg:px-[135px] pb-16 min-h-screen text-neutral-900 dark:text-white bg-linear-(--linear-gradient) dark:bg-linear-(--dark-gradient)' >
      <Header />
      <Filter status={status} setStatus={setStatus} />
      <Extension filteredExtension={filteredExtension} handleToggle={handleToggle} handleRemove={handleRemove} />
    </div>
  )
}

export default App


