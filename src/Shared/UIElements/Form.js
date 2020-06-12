import React, {useState, useContext} from 'react'

import {AlertContext} from '../../Context/Alert/AlertContext'
import {FbContext} from '../../Context/FireBase/FbContext'
import Button from './Button'
import './Form.css'

export default props => {

  const [value,
    setValue] = useState('')
  const alert = useContext(AlertContext)
  const fb = useContext(FbContext)

  const submitHandler = e => {
    e.preventDefault()

    if (value.trim()) {
      fb
        .addNote(value.trim())
        .then(() => {
          
          alert.show('a note was added', 'success')
          setValue('')
          setTimeout(()=>{ alert.hide() }, 2000);
        })
        .catch(() => {
          alert.show('Something went wrong. Reload a page', 'attention')
          setTimeout(()=>{ alert.hide() }, 2000);
        })
    } else {
      alert.show('add some note, please', 'warning')
      setTimeout(()=>{ alert.hide() }, 2000);
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="input a note and press enter"
        value={value}
        onChange={e => setValue(e.target.value)}/>

      <Button type='submit' height={'auto'} width={'auto'} padding={'1rem'}>
        submit
      </Button>
    </form>
  )
}