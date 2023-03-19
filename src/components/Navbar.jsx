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
             <Link className='f1' to='#Hero' smooth><h3>Home</h3></Link>
             <Link className='f1' to='#About'smooth><h3>About</h3></Link>
             <Link className='f1' to='#Sponsors'smooth><h3>Sponsors</h3></Link>
             <a href='https://www.randomizemuj.com/team' className='f1'><h3>Team</h3></a>
            </div>
      </nav>
      </BrowserRouter>
    )
}