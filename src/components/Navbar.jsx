import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {HashLink as Link} from'react-router-hash-link'

export default function Nav(){

    return(
      <BrowserRouter>
         <nav className='navbar'>
          <div className='void'>
          </div>
            <div className='nav-items'>
             <Link className='f1' to='#Hero' smooth><span>Home</span></Link>
             <Link className='f1' to='#About'smooth><span>About</span></Link>
             <Link className='f1' to='#Sponsors'smooth><span>Sponsors</span></Link>
             <Link className='f1' to='#Events'smooth><span>Events</span></Link>
             <a href='https://www.randomizemuj.com/team' className='f1'><span>Team</span></a>
            </div>
      </nav>
      </BrowserRouter>
    )
}