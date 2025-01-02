import { useState } from 'react'
import './App.css'
import Header from './Header'
import Post from './Post'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route index element={     
          <main>
          <Header/>
          <Post/>
          <Post/>
        </main>
        }/>

        <Route path={'/login'} element={
          <main>
            <Header/>
              <div>
                login Page 
            </div>
          </main>
        }/>
    </Routes>

  )
}

export default App
