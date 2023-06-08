import React, { FC, useEffect, useState } from 'react'
import styles from './Messages.module.scss'
import { Message } from '../message/Message'
import { wsChatChannel } from '../../api/chat'

const Messages: FC = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    wsChatChannel.addEventListener('message', (event) => {
      const newMessage: never[] = JSON.parse(event.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessage])
    })
  }, [])

  return (
    <div>
      <ul className={styles.messages}>
        {messages.map((message: string, index: number) => (
          <Message key={index} message={message} />
        ))}
      </ul>
    </div>
  )
}

export { Messages }
