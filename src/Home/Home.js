import React, {useContext, useEffect} from 'react'

import Form from '../Shared/UIElements/Form'
import NoteList from './components/NoteList'
import {FbContext} from '../Context/FireBase/FbContext'
import Spinner from '../Shared/UIElements/Spinner'
import './Home.css'

export default props => {

  const {load, notes, fetchNotes} = useContext(FbContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='notes_page'>
      <Form/>
      <hr/> 
      {load
        ? <Spinner/>
        : <NoteList notes={notes}/>
      }
    </div>
  )
}