import { useContext, useState } from 'react'
import Comment from './components/Comment';
import { AppContext } from './AppProvider';
import WriteComment from './components/WriteComment';

function App() {
  const { comments } = useContext(AppContext);
  const [replyingId, setReplyingId] = useState('');

  return (
    <div className='min-h-screen flex justify-center items-center py-[58px] bg-grey-50'>
      <div className='w-[730px] flex flex-col gap-6'>
        {
          comments.map(comment => {
            let { id, content, createdAt, score, user, replies } = comment;
            return (
              <div key={id} className='flex flex-col gap-6 parent'>
                <Comment 
                  id={id}
                  content={content}
                  createdAt={createdAt}
                  score={score}
                  user={user}
                  setReplyingId={setReplyingId}
                />
                {
                replyingId === id &&
                  <WriteComment 
                    isReply={true}
                    id={id}
                    replyingTo={user.username}
                    setReplyingId={setReplyingId}
                  />
                }
                <div className='flex flex-col gap-6 ml-[46px] pl-[42px] border-l-2 border-grey-100'>
                  {
                    replies.map(reply => {
                      let { id, content, createdAt, score, user, replyingTo } = reply;
                      return (
                        <div key={id} className='flex flex-col gap-6'>
                          <Comment 
                            key={id}
                            id={id}
                            content={content}
                            createdAt={createdAt}
                            score={score}
                            user={user}
                            replyingTo={replyingTo}
                            setReplyingId={setReplyingId}
                          />
                          {
                          replyingId === id &&
                            <WriteComment 
                              isReply={true}
                              id={comment.id}
                              replyingTo={user.username}
                              setReplyingId={setReplyingId}
                            />
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
        <WriteComment />
      </div>
    </div>
  )
}

export default App
