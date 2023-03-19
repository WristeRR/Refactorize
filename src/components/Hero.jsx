import React from 'react'
import Logo from '../assets/RefactorizeTypo.svg'



export default function Hero(){
    return(
        <div className="Header" id='Hero'>
              <center><img className='refactorize' src={Logo} alt="logo" /></center>
      </div>
    )
}