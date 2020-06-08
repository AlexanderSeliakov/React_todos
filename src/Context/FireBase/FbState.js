import React, {useReducer} from 'react'
import axios from 'axios'

import {FbContext} from './FbContext'
import {FbReducer} from './FbReducer'
import {SHOW_LOAD, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE} from '../Types'

const URL = process.env.REACT_APP_DB_URL

export default props => {
  const initState = {
    notes: [],
    load: true
  }
  const [state,
    dispatch] = useReducer(FbReducer, initState)

  const showLoader = () => dispatch({type: SHOW_LOAD})

  const fetchNotes = async() => {
    showLoader()
    const res = await axios.get(`${URL}/notes.json`)

    const payload =  Object
      .keys(res.data || [])
      .map(key => {
        return {
          ...res.data[key],
          id: key
        }
      }) 
      dispatch({type: FETCH_NOTES, payload})
  }

  const addNote = async note => {
    const newNote = {
      note
    }
    try {
      const res = await axios.post(`${URL}/notes.json`, newNote)
      const payload = {
        ...newNote,
        id: res.data.name
      }
      dispatch({type: ADD_NOTE, payload: payload})
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const removeNote = async id => {
    await axios.delete(`${URL}/notes/${id}.json`)
    dispatch({type: REMOVE_NOTE, payload: id})
  }

  return (
    <FbContext.Provider
      value={{
      showLoader,
      addNote,
      fetchNotes,
      removeNote,
      load: state.load,
      notes: state.notes
    }}>
      {props.children}
    </FbContext.Provider>
  )
}