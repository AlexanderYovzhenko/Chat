import React from 'react'
import styles from './App.module.scss'
import background from './assets/3d-robot.jpeg'
import Chat from '../components/chat/Chat'

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>Chat</h1>
      </header>
      <main>
        <img className={styles.background} src={background} alt="background image" />
        <div className={styles.content_wrapper}>
          <Chat />
        </div>
      </main>
    </div>
  )
}

export { App }
