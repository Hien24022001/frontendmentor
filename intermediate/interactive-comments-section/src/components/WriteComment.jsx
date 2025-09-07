import React, { useContext, useState } from 'react'
import { AppContext } from '../AppProvider'
import AppInput from './AppInput';
import { generateUniqueId } from '../utils';

function WriteComment({ setReplyingId, isReply = false, id = null, replyingTo = '' }) {
  const { currentUser, addComment } = useContext(AppContext);
  const [value, setValue] = useState(replyingTo ? `@${replyingTo} ` : '');

  const handleAddComment = () => {
    if (!value) return;
    addComment(
      true,
      {
        id: generateUniqueId(),
        content: value,
        createdAt: new Date(),
        score: 0,
        user: currentUser,
        replies: []
      }
    );
    setValue('');
  }

  const handleReplyComment = () => {
    if (!value) return;
    
    const pattern = /@(\w+)\s+(.*)/;
    const match = value.match(pattern);
    addComment(
      false,
      {
        id: generateUniqueId(),
        content: match ? match[2] : value,
        createdAt: new Date(),
        score: 0,
        user: currentUser,
        replyingTo: match ? match[1] : ''
      },
      id
    );

    setValue('');
    setReplyingId('');
  }

  return (
    <div className='p-6 bg-white flex gap-4 items-start rounded-lg'>
        <img src={currentUser.image.png} className='w-[40px] h-[40px] rounded-full' />
        <div className='grow'>
            <AppInput value={value} setValue={setValue} />
        </div>
        <button 
          className='btn text-preset-2-medium' 
          onClick={isReply ? handleReplyComment : handleAddComment}
        >
            { isReply ? 'REPLY' : 'SEND' }
        </button>
    </div>
  )
}

export default WriteComment