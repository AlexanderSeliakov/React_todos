import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'

import Button from '../UIElements/Button'
import {AlertContext} from '../../Context/Alert/AlertContext'
import './Alert.css'

export default props => {

  const {alert, hide} = useContext(AlertContext)

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{enter: 300, exit: 150}}
      classNames={'alerts'}
      mountOnEnter
      unmountOnExit>

      <div className={`alert alert-${alert.type || 'close'}`}>
        <p>
          <b>{alert.type}!</b>
          &nbsp;{alert.text}
        </p>

        <Button onClick={hide} type={alert.type || 'close'}>X</Button>
      </div>
    </CSSTransition>
  )
}