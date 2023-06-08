import React, { FC } from 'react'
import styles from './Message.module.scss'
import defaultImage from './assets/default-image.jpg'

const Message: FC<{ message: string }> = ({ message }) => {
  return (
    <li className={`${styles.message} ${styles.allMessage}`}>
      {/* ${styles.myMessage} */}
      <img className={styles.logo} src={defaultImage} alt="logo of user" />
      <p>{message}</p>
    </li>
  )
}

export { Message }
