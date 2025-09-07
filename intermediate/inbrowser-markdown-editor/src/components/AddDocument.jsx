import React, { useContext, useState } from 'react'
import { AppContext } from '../AppProvider';
import { formatDate, generateUniqueId } from '../utils';
import Modal from './Modal';

function AddDocument() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const { createDocument, selectDocument } = useContext(AppContext);

  const TextInput = (
    <input 
        type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className='border border-black-400 rounded-md p-2'
    />
  )

  const handleAddDocument = () => {
    if (!name) return;
    let id = generateUniqueId();
    createDocument({ id: id, createdAt: formatDate(), name: `${name}.md`, content: '' });
    selectDocument(id);
    setIsModalOpen(false);
  }

  return (
    <>
        <button className='btn heading-M' onClick={() => setIsModalOpen(true)}>
            + New Document
        </button>
        {
        isModalOpen &&
        <Modal
            title='Add Document'
            content={TextInput}
            btnText='Create'
            btnAction={handleAddDocument}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
        }
    </>
  )
}

export default AddDocument