import React, {useReducer} from 'react'

import {AlertContext} from './AlertContext'
import {AlertReducer} from './AlertReducer'
import {SHOW_ALERT, HIDE_ALERT} from '../Types'

export default props => {

  const [state,
    dispatch] = useReducer(AlertReducer, {visible: false})

  const show = (text, type = 'close') => {
    dispatch({
      type: [SHOW_ALERT],
      payload: {
        text,
        type
      }
    })
  }

  const hide = () => {
    dispatch({type: HIDE_ALERT})
  }

  

  return (
    <AlertContext.Provider
      value={{
      show,
      hide,
      alert: state
    }}>
      {props.children}
    </AlertContext.Provider>
  )
}