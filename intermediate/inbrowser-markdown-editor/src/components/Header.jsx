import React, { useContext, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import IconMenu from '../assets/images/icon-menu.svg'
import IconDelete from '../assets/images/icon-delete.svg'
import IconSave from '../assets/images/icon-save.svg'
import IconClose from '../assets/images/icon-close.svg'
import IconDocument from '../assets/images/icon-document.svg'
import { AppContext } from '../AppProvider'
import Modal from './Modal'

function Header({ markdown }) {
  const { isShowSidebar, toggleSidebar, documents, selectedId, updateDocument, deleteDocument } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icon = isShowSidebar ? IconClose : IconMenu;
  let selectedDocument = null;
  if (documents.length > 0) {
    selectedDocument = documents.find((item) => item.id === selectedId);
  }

  const handleSave = () => {
    updateDocument({ content: markdown });
  }

  const handleDelete = () => {
    deleteDocument();
    setIsModalOpen(false);
  }

  return (
    <header className='flex justify-between items-center h-[72px] bg-black-800'>
      <div className='flex items-center h-full'>
        <div className='w-[72px] h-full flex justify-center items-center bg-black-700 cursor-pointer' onClick={toggleSidebar}>
          <img src={icon} />
        </div>
        <img src={Logo} className='px-6' />
        {
          selectedDocument && (
            <div className='flex items-center gap-4 px-6'>
              <img src={IconDocument} />
              <div className='flex flex-col'>
                <span className='body-M text-black-500'>Document Name</span>
                <span className='heading-M text-black-100'>{selectedDocument.name}</span>
              </div>
            </div>
          )
        }
      </div>
      <div className='flex items-center gap-5 pr-4'>
        <img src={IconDelete} className='cursor-pointer' onClick={() => setIsModalOpen(true)} />
        <button className='btn flex items-center gap-2' onClick={handleSave}>
          <img src={IconSave} />
          <span className='heading-M'>Save Changes</span>
        </button>
      </div>
      {
        isModalOpen &&
        <Modal 
          title='Delete this document'
          content={<p>Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.</p>}
          btnText='Confirm & Delete'
          btnAction={handleDelete}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      }
    </header>
  )
}

export default Header
