import React, {useState, useEffect}  from 'react';
import './Gallery.css'
import Info from '../components/Info'

export default function Gallery()
{
    const {active, setActive}= useState(0);

    const gal= document.querySelector('.grid');
    function leftScroll(){
        gal.scrollBy(-300,0);
    }
    function rightScroll(){
        gal.scrollBy(300,0);
    }

    return (
        <div className= "gallery">
            <h1>Gallery</h1>
            <div className="grid snaps-inline">
                <button className="left" onClick={leftScroll}></button>
                <div id= "synthesise"className="tile"></div>
                <div id= "panel" className="tile"></div>
                <div id= "visualise" className="tile"></div>
                <div id= "cryptx" className="tile"></div>
                <div id= "surprise" className="tile"></div>
                <div id= "idealise" className="tile"></div>
                <button className="right" onClick={rightScroll}></button>
            </div>
            <div className="info">
                {active?<Info/>:<h1>Hover for date, time and venue. Click to know more</h1>}
            </div>
        </div>
    )
}