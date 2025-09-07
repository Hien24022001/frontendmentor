import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppProvider'
import { escapeHtml, translateMarkdown } from '../utils';

function Content({ markdown, setMarkdown }) {
  const { selectedId, documents } = useContext(AppContext);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    let selectedDocument = documents.find((item) => item.id === selectedId);
    if (selectedDocument) {
      setMarkdown(selectedDocument.content);
    }
  }, [selectedId, documents])

  useEffect(() => {
    setPreview(translateMarkdown(markdown));
  }, [markdown])

  return (
    <section className='grid grid-cols-2'>
      <div className='border-r border-black-400'>
        <p className='heading-S text-black-500 bg-black-200 p-2'>MARKDOWN</p>
        <textarea className='p-2 markdown w-full h-full max-h-[calc(100vh-96px)] focus:outline-0 overflow-y-scroll' value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      </div>
      <div>
        <p className='heading-S text-black-500 bg-black-200 p-2'>PREVIEW</p>
        <div className='p-2 markdown max-h-[calc(100vh-96px)] overflow-y-scroll' dangerouslySetInnerHTML={{ __html: preview }} />
      </div>
    </section>
  )
}

export default Content