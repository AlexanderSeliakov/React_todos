import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import NoteItem from './NoteItem'
import './NoteList.css'

export default props => {
  return (
    <TransitionGroup component='ul'>
      {props
        .notes
        .map(singleNote => (

          <CSSTransition
            timeout={{enter:700, exit:300}} key={singleNote.id} classNames={'note_animation'}>

            <NoteItem note={singleNote}/>

          </CSSTransition>

        ))}
    </TransitionGroup>
  )
}