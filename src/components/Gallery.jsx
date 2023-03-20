import React, {useState, useEffect, useRef}  from 'react';
import './Gallery.css';
import Info from '../components/Info';
import Card from './Card';

export default function Gallery()
{
    const [active, setActive]= useState(0);
    const [showCard, setShowCard]= useState(false);
    const gallery= useRef(null);
    const synthesise= useRef(null)
    const panel= useRef(null)
    const visualise= useRef(null)
    const cryptx= useRef(null)
    const surprise= useRef(null)
    const idealise= useRef(null)

    function toggleCard(){
      setShowCard(!showCard);
    }
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
        gallery.current.addEventListener("mouseleave",()=>{
          handleHover(0);
        });
       // code to activate the popup card
       synthesise.current.addEventListener("click", () => {
        toggleCard()
      });
      panel.current.addEventListener("click", () => {
        toggleCard()
      });
      visualise.current.addEventListener("click", () => {
        toggleCard()
      });
      cryptx.current.addEventListener("click", () => {
        toggleCard()
      });
      surprise.current.addEventListener("click", () => {
        toggleCard();
      });
      idealise.current.addEventListener("click", () => {
        toggleCard();
      });
        
      }, []);
    function leftScroll(){
      gallery.current.scrollLeft -=320;
    }
    function rightScroll(){
      gallery.current.scrollLeft += 320;
    }

    return (
        <div className= "gallery">
            <h1 className= "events">Events</h1>
            <button className="left" onClick={leftScroll}></button>
            <button className="right" onClick={rightScroll}></button>
            <div className="grid snaps-inline" ref={gallery}>
                <div id= "synthesise"className="tile" ref={synthesise}></div>
                <div id= "panel" className="tile" ref={panel}></div>
                <div id= "visualise" className="tile" ref={visualise}></div>
                <div id= "cryptx" className="tile" ref={cryptx}></div>
                <div id= "surprise" className="tile" ref={surprise}></div>
                <div id= "idealise" className="tile" ref={idealise}></div>
            </div>
            {showCard && (
              <div className="card-background" onClick={toggleCard}>
                <Card event={active}/>
              </div>
            )}
            <div className="info">
                {active?<Info event={active}/>:<h1 className="info-text">Hover over the tiles for date, time and venue. Click to know more</h1>}
            </div>
        </div>
    )
}