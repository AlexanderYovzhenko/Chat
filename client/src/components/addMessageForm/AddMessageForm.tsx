import React, { FC, useRef, useState } from 'react'
import styles from './AddMessageForm.module.scss'
import messageIcon from './assets/message_icon.png'
import { wsChatChannel } from '../../api/chat'

const AddMessageForm: FC = () => {
  const [message, setMessage] = useState('')

  const sendMessageHandler = () => {
    if (!message) {
      return
    }

    wsChatChannel.send(message)
    setMessage('')
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()

      const textarea = textareaRef.current

      if (textarea) {
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        setMessage((prevText) => {
          const newText = prevText.substring(0, start) + '\r\n' + prevText.substring(end)
          textarea.focus()
          textarea.setSelectionRange(start + 1, start + 1)
          return newText
        })
      }
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessageHandler()
    }
  }

  return (
    <div className={styles.messageForm}>
      <textarea
        className={styles.text_input}
        placeholder="Message..."
        ref={textareaRef}
        value={message}
        onChange={(event) => setMessage(event.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className={styles.button}
        name="favorite"
        value={'message'}
        onClick={sendMessageHandler}
      >
        <img src={messageIcon} alt="message icon" />
      </button>
    </div>
  )
}

export { AddMessageForm }
