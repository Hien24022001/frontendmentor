import React, { useContext, useState } from 'react'
import IconPlus from '../assets/images/icon-plus.svg';
import IconMinus from '../assets/images/icon-minus.svg';
import IconEdit from '../assets/images/icon-edit.svg';
import IconDelete from '../assets/images/icon-delete.svg';
import IconReply from '../assets/images/icon-reply.svg';
import { covertToTimeExpression } from '../utils';
import { AppContext } from '../AppProvider';
import AppInput from './AppInput';
import ModalDelete from './ModalDelete';

function Comment({ id, content, createdAt, score, user, setReplyingId, replyingTo='' }) {
  const { currentUser, updateComment, deleteComment } = useContext(AppContext);
  const [value, setValue] = useState(`@${replyingTo} ${content}`);
  const [isEditting, setIsEditting] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const handeUpdateComment = () => {
    const pattern = /@(\w+)\s+(.*)/;
    const match = value.match(pattern);

    if (match) {
        updateComment(id, { replyingTo: match[1], content: match[2] });
    } else {
        updateComment(id, { replyingTo: '', content: value });
    }
    setIsEditting(false);
  }

  const handleDeleteComment = () => {
    deleteComment(id);
    setIsShowModal(false);
  }

  const increaseScore = () => {
    updateComment(id, { score: score + 1 });
  }

  const decreaseScore = () => {
    if (score === 0) return;
    updateComment(id, { score: score - 1 });
  }

  return (
    <div className='p-6 bg-white flex gap-6 rounded-lg'>
        <div className='flex items-center justify-center h-[100px] bg-grey-50 rounded-[10px]'>
            <div className='flex flex-col items-center w-[40px] gap-4'>
                <img src={IconPlus} className='cursor-pointer' onClick={increaseScore} />
                <span className='text-preset-2-medium text-purple-600'>{ score } </span>
                <img src={IconMinus} className='cursor-pointer' onClick={decreaseScore} />
            </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img src={user.image.png} className='w-8 h-8 rounded-full' />
                    <span className='text-preset-2-medium text-grey-800'>{ user.username } </span>
                    {currentUser.username === user.username &&
                    <span className='text-preset-3 text-white px-1.5 py-1 bg-purple-600 rounded-[2px]'>You</span>
                    }
                    <span className='text-preset-2-regular text-grey-500'>{ covertToTimeExpression(createdAt) }</span>
                </div>
                {
                    currentUser.username === user.username ? (
                        <div className='flex items-center gap-6'>
                            <div 
                                className='flex items-center gap-2 cursor-pointer'
                                onClick={() => setIsShowModal(true)}
                            >
                                <img src={IconDelete} />
                                <span className='text-preset-2-medium text-pink-400'>Delete</span>
                            </div>
                            <div 
                                className='flex items-center gap-2 cursor-pointer'
                                onClick={() => setIsEditting(true)}
                            >
                                <img src={IconEdit} />
                                <span className='text-preset-2-medium text-purple-600'>Edit</span>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => setReplyingId(id)}
                        >
                            <img src={IconReply} />
                            <span className='text-preset-2-medium text-purple-600'>Reply</span>
                        </div>
                    )
                }
            </div>
            {
                isEditting ? (
                    <div className='flex flex-col gap-4 items-end'>
                        <AppInput value={value} setValue={setValue} />
                        <button className='btn' onClick={handeUpdateComment}>UPDATE</button>
                    </div>
                ) : (
                    <p className='text-preset-2-regular text-grey-500'>
                        { replyingTo && <span className='text-purple-600 font-bold'>@{ replyingTo } </span> }
                        { content }
                    </p>
                )
            }
        </div>
        {
            isShowModal &&
            <ModalDelete 
                onCancel={() => setIsShowModal(false)}
                onConfirm={handleDeleteComment}
            />
        }
    </div>
  )
}

export default Comment