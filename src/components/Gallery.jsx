import React, {useState, useEffect, useRef}  from 'react';
import './Gallery.css'
import Info from '../components/Info'

export default function Gallery()
{
    const [active, setActive]= useState(0);
    const [scrollPosition, setScrollPosition]= useState(0);
    const synthesise= useRef(null)
    const panel= useRef(null)
    const visualise= useRef(null)
    const cryptx= useRef(null)
    const surprise= useRef(null)
    const idealise= useRef(null)

    useEffect(() => {
        function handleHover(eventNum) {
          setActive(eventNum);
        }
    
        // Updating the info according to mouse hover
        synthesise.current.addEventListener("mouseenter", () => {
          handleHover(1);
        });
        panel.current.addEventListener("mouseenter", () => {
          handleHover(2);
        });
        visualise.current.addEventListener("mouseenter", () => {
          handleHover(3);
        });
        cryptx.current.addEventListener("mouseenter", () => {
          handleHover(4);
        });
        surprise.current.addEventListener("mouseenter", () => {
          handleHover(5);
        });
        idealise.current.addEventListener("mouseenter", () => {
          handleHover(6);
        });
        // reverting to original text in info
        synthesise.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
          panel.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
          visualise.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
          cryptx.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
          surprise.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
          idealise.current.addEventListener("mouseleave", () => {
            handleHover(0);
          });
        
      }, []);
    function leftScroll(){
        setScrollPosition(scrollPosition-300);
    }
    function rightScroll(){
        setScrollPosition(scrollPosition+300);
    }

    return (
        <div className= "gallery">
            <h1>Gallery</h1>
            <div className="grid">
                <button className="left" onClick={leftScroll}></button>
                <div id= "synthesise"className="tile" ref={synthesise}></div>
                <div id= "panel" className="tile" ref={panel}></div>
                <div id= "visualise" className="tile" ref={visualise}></div>
                <div id= "cryptx" className="tile" ref={cryptx}></div>
                <div id= "surprise" className="tile" ref={surprise}></div>
                <div id= "idealise" className="tile" ref={idealise}></div>
                <button className="right" onClick={rightScroll}></button>
            </div>
            <div className="info">
                {active?<Info event={active}/>:<h1 className="info-text">Hover on the tiles for date, time and venue. Click to know more</h1>}
            </div>
        </div>
    )
}