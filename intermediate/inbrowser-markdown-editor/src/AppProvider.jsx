import React, { useEffect, useReducer } from 'react'
import { documents } from './data';

export const AppContext = React.createContext();

const DOCUMENTS = JSON.parse(localStorage.getItem("documents")) || documents;

const initialState = {
  isShowSidebar: false,
  selectedDocumentId: DOCUMENTS ? DOCUMENTS[0]?.id : null,
  documents: DOCUMENTS || []
}

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_DOCUMENT': {
      const updatedDocuments = [...state.documents, action.payload];
      localStorage.setItem("documents", JSON.stringify(updatedDocuments));
      return {
        ...state,
        selectedDocumentId: action.payload.id,
        documents: updatedDocuments
      }
    }
    case 'UPDATE_DOCUMENT': {
      const updatedDocuments = state.documents.map((document) => {
        if (document.id === state.selectedDocumentId) {
          return { ...document, ...action.payload };
        }
        return document;
      })
      localStorage.setItem("documents", JSON.stringify(updatedDocuments));
      return {
        ...state,
        documents: updatedDocuments
      }
    }
    case 'DELETE_DOCUMENT': {
      const updatedDocuments = state.documents.filter((document) => document.id !== state.selectedDocumentId);
      localStorage.setItem("documents", JSON.stringify(updatedDocuments));
      return {
        ...state,
        selectedDocumentId: updatedDocuments.length > 0 ? updatedDocuments[0].id : null,
        documents: updatedDocuments
      }
    }
    case 'SELECT_DOCUMENT': {
      return {
        ...state,
        selectedDocumentId: action.payload
      }
    }
    case 'TOGGLE_SIDEBAR': {
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar
      }
    }
    default: {
      return initialState;
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createDocument = (data) => {
    dispatch({ type: 'CREATE_DOCUMENT', payload: data });
  }
  const updateDocument = (data) => {
    dispatch({ type: 'UPDATE_DOCUMENT', payload: data });
  }
  const deleteDocument = () => {
    dispatch({ type: 'DELETE_DOCUMENT' });
  }
  const selectDocument = (id) => {
    dispatch({ type: 'SELECT_DOCUMENT', payload: id });
  }
  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }

  return (
    <AppContext.Provider value={{
      isShowSidebar: state.isShowSidebar,
      selectedId: state.selectedDocumentId,
      documents: state.documents,
      createDocument,
      updateDocument,
      deleteDocument,
      selectDocument,
      toggleSidebar
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider
