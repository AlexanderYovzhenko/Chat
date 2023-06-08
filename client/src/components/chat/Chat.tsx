import React, { FC } from 'react'
import styles from './Chat.module.scss'
import { Messages } from '../messages/Messages'
import { AddMessageForm } from '../addMessageForm/AddMessageForm'

const Chat: FC = () => {
  return (
    <div>
      <div className={styles.chat}>
        <Messages />
      </div>
      <AddMessageForm />
    </div>
  )
}

export { Chat }
