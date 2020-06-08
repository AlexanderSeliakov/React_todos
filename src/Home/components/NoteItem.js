import React, {useContext} from 'react'


import {FbContext} from '../../Context/FireBase/FbContext'
import Button from '../../Shared/UIElements/Button'
import './NoteItem.css'

export default ({note}) => {
  const {removeNote} = useContext(FbContext)
  return (
    <li className="note_item">
      {note.note}
      <Button  type="attention" onClick={()=>removeNote(note.id)}> X </Button>
    </li>
  )
}