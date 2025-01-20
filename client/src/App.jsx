import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <main>
        <header> 
          <a className='logo'>
            Poly-Blog 
          </a>
          <nav>
            <a href=''>Login</a>
            <a href=''>Register</a>
          </nav>
        </header>
        <div className='post'>
          <div className='image'>
          <img src="https://randomblog.hu/wp-content/uploads/2023/08/Setting-the-resize-window-shortcut-to-Super-Right-mouse-button-on-Ubuntu-23.04.webp" alt='Random blog image from the internet '/>
          </div>
          <div className='texts'>
            <h2> Full house battery backup comig later this year </h2>
            <p className="info">
              <span className="author">Meareg Teame </span>
              <time datetime="">2025-20-06 12:04</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati amet dolores atque vitae adipisci consequuntur ut repudiandae odit sequi porro, hic impedit. Vel officiis veritatis dolore quaerat nesciunt repellendus ex!
            </p>
          </div>
        </div>

        <div className='post'>
          <div className='image'>
          <img src="https://randomblog.hu/wp-content/uploads/2023/08/Setting-the-resize-window-shortcut-to-Super-Right-mouse-button-on-Ubuntu-23.04.webp" alt='Random blog image from the internet '/>
          </div>
          <div className='texts'>
            <h2> Full house battery backup comig later this year </h2>
            <p className="info">
              <span className="author">Meareg Teame </span>
              <time datetime="">2025-20-06 12:04</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati amet dolores atque vitae adipisci consequuntur ut repudiandae odit sequi porro, hic impedit. Vel officiis veritatis dolore quaerat nesciunt repellendus ex!
            </p>
          </div>
        </div>
      <div className='post'>
          <div className='image'>
          <img src="https://randomblog.hu/wp-content/uploads/2023/08/Setting-the-resize-window-shortcut-to-Super-Right-mouse-button-on-Ubuntu-23.04.webp" alt='Random blog image from the internet '/>
          </div>
          <div className='texts'>
            <h2> Full house battery backup comig later this year </h2>
            <p className="info">
              <span className="author">Meareg Teame </span>
              <time datetime="">2025-20-06 12:04</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati amet dolores atque vitae adipisci consequuntur ut repudiandae odit sequi porro, hic impedit. Vel officiis veritatis dolore quaerat nesciunt repellendus ex!
            </p>
          </div>
        </div>




     
      </main>
  )
}

export default App
