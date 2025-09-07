import { useContext, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { AppContext } from './AppProvider'

function App() {
  const { isShowSidebar, documents } = useContext(AppContext);
  const [markdown, setMarkdown] = useState('');

  return (
    <div className='overflow-hidden h-screen'>
      <div className={`transition-all duration-300 fixed top-0 ${isShowSidebar ? 'left-0' : '-left-[250px]'}`}>
        <Sidebar />
      </div>
      <div className={`w-full transition-transform duration-300 ${isShowSidebar ? 'translate-x-[250px]' : 'translate-x-0'}`}>
        <Header markdown={markdown} />
        {
          documents.length > 0 ? (
            <Content markdown={markdown} setMarkdown={setMarkdown} />
          ) : (
            <div></div>
          )
        }
      </div>
    </div>
  )
}

export default App
