import React, {useState, useEffect, useRef}  from 'react';
import './Gallery.css';
import Info from '../components/Info';
import Card from './Card';

export default function Gallery()
{
    const [active, setActive]= useState(0);
    const [clicked, setClicked]= useState(0);
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
    function getClicked(click){
      setClicked(click)
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
        getClicked(1);
      });
      panel.current.addEventListener("click", () => {
        toggleCard(2)
        getClicked(2);
      });
      visualise.current.addEventListener("click", () => {
        toggleCard(3)
        getClicked(3);
      });
      cryptx.current.addEventListener("click", () => {
        toggleCard(4)
        getClicked(4);
      });
      surprise.current.addEventListener("click", () => {
        toggleCard(5);
        getClicked(5);
      });
      idealise.current.addEventListener("click", () => {
        toggleCard(6);
        getClicked(6);
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
              <div id= "synthesise"className="tile" ref={synthesise}><h2 className='tile-text'>Synthesize</h2></div>
              <div id= "panel" className="tile" ref={panel}><h2 className='tile-text'>Panel Talk</h2></div>
              <div id= "visualise" className="tile" ref={visualise}><h2 className='tile-text'>Visualize</h2></div>
              <div id= "cryptx" className="tile" ref={cryptx}><h2 className='tile-text'>Cryptx</h2></div>
              <div id= "surprise" className="tile" ref={surprise}><h2 className='tile-text'>Surprize</h2></div>
              <div id= "idealise" className="tile" ref={idealise}><h2 className='tile-text'>Idealize</h2></div>
            </div>
            {showCard && (
              <div className="card-background" onClick={toggleCard}>
                <Card event={clicked}/>
              </div>
            )}
            <div className="info">
                {active?<Info event={active}/>:<h1 className="info-text">Hover over the tiles for date, time and venue. Click to know more</h1>}
            </div>
        </div>
    )
}