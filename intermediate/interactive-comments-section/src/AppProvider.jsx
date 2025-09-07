import React, { useReducer } from 'react'
import { COMMENTS, getLocalStorage, setLocalStorage } from './utils';

export const AppContext = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_COMMENT': {
            let newComments = [];
            if (action.payload.isRoot) {
                newComments = [...state, action.payload.data];
            } else {
                newComments = state.map(comment => {
                    if (comment.id === action.payload.id) {
                        return {
                            ...comment,
                            replies: [...comment.replies, action.payload.data]
                        }; 
                    }
                    return comment;
                })
            }
            setLocalStorage('comments', newComments);
            return newComments;
        }
        case 'UPDATE_COMMENT': {
            const id = action.payload.id;
            const newValues = action.payload.updatedData;
            const newComments = state.map(comment => {
                if (comment.id === id) {
                    return { ...comment, ...newValues };
                }
                // Check replies
                if (comment.replies) {
                    return {
                        ...comment,
                        replies: comment.replies.map(reply => {
                            if (reply.id === id) {
                                return { ...reply, ...newValues };
                            }
                            return reply; 
                        })
                    };
                }
                return comment;
            });
            setLocalStorage('comments', newComments);
            return newComments;
        }
        case 'DELETE_COMMENT': {
            const id = action.payload;
            const newComments = state.reduce((acc, comment) => {
                // If the current comment matches the id, skip it
                if (comment.id === id) {
                    return acc; // Don't add this comment to the accumulator
                }
                
                // Check replies
                const filteredReplies = comment.replies.filter(reply => reply.id !== id);
                
                acc.push({
                    ...comment,
                    replies: filteredReplies // Update replies without the deleted reply
                });
                
                return acc;
            }, []);
            setLocalStorage('comments', newComments);
            return newComments;
        }
    }
}

let currentUser = {}, comments = [];
// local storage for comments
if (localStorage.getItem('comments')) {
    comments = getLocalStorage('comments'); 
} else {
    comments = COMMENTS.comments;
    setLocalStorage('comments', COMMENTS.comments);
}
// local storage for currentUser
if (localStorage.getItem('currentUser')) {
    currentUser = getLocalStorage('currentUser'); 
} else {
    currentUser = COMMENTS.currentUser;
    setLocalStorage('currentUser', COMMENTS.currentUser);
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, comments);

  const addComment = (isRoot, data, id = null) => {
    dispatch({ type: 'ADD_COMMENT', payload: { isRoot, data, id } });
  }

  const updateComment = (id, data) => {
    dispatch({ type: 'UPDATE_COMMENT', payload: { id, updatedData: data } });
  }

  const deleteComment = (id) => {
    dispatch({ type: 'DELETE_COMMENT', payload: id });
  }

  return (
    <AppContext.Provider value={{
        currentUser: currentUser,
        comments: state,
        addComment,
        updateComment,
        deleteComment
    }}>
        { children }
    </AppContext.Provider>
  )
}

export default AppProvider