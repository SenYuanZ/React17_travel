import React from 'react'
import { useRoutes } from 'react-router-dom'
import styles from './App.module.css'
import routes from './routes'

function App() {
  /* const elment = () => useRoutes(routes) */
  const Views = () => useRoutes(routes)
  return (
    <div className={styles.App}>
      <Views />
    </div>
  )
}

export default App
