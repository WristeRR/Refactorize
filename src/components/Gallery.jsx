import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import Info from "../components/Info";
import Card from "./Card";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [current, setCurrent]= useState(1);
  const [isMobile, setIsMobile]= useState(false);
  const [showCard, setShowCard] = useState(false);
  const gallery = useRef(null);
  const synthesise = useRef(null);
  const panel = useRef(null);
  const visualise = useRef(null);
  const cryptx = useRef(null);
  const surprise = useRef(null);
  const idealise = useRef(null);
  let checkIntersection= false;

  function setCheckIntersection(val){
    checkIntersection= val;
  }

  const eventRefs= [synthesise, panel, visualise, cryptx, surprise, idealise];

  function toggleCard() {
    setShowCard(!showCard);
  }
  function getClicked(click) {
    setClicked(click);
  }
  useEffect(() => {
    function handleHover(eventNum) {
      setActive(eventNum);
    }

    // Updating the info according to mouse hover
    for (let i=0; i<eventRefs.length;i++){
      eventRefs[i].current.addEventListener("mouseenter", () => {
        handleHover(i+1);
      })
    }
    // reverting to original text in info
    gallery.current.addEventListener("mouseleave", () => {
      handleHover(0);
    });
    // code to activate the popup card
    for (let i=0; i<eventRefs.length;i++){
      eventRefs[i].current.addEventListener("click", () => {
        toggleCard();
        getClicked(i+1);
      })
    }
    // To get currently intersecting tile in mobile view
    const options ={
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    const observer= new IntersectionObserver(ref => {
        if (ref.isIntersecting){
          setCheckIntersection(true);
        }
        else{
          setCheckIntersection(false);
        }
      }
    , options)
    for (let i=0; i<eventRefs.length;i++){
      observer.observe(eventRefs[i].current)
      if (checkIntersection){
        setCurrent(i+1);
      }
    }

    function handleResize(){
      if (window.innerWidth <= 768){
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [current,active]);
  function leftScroll() {
    gallery.current.scrollLeft -= 320;
  }
  function rightScroll() {
    gallery.current.scrollLeft += 320;
  }

  return (
    <div className="gallery" id="Events">
      <h1 className="events">Events</h1>
      <button className="left" onClick={leftScroll}></button>
      <button className="right" onClick={rightScroll}></button>
      <div className="grid snaps-inline" ref={gallery}>
        <div id="synthesise" className="tile" ref={synthesise}></div>
        <div id="panel" className="tile" ref={panel}></div>
        <div id="visualise" className="tile" ref={visualise}></div>
        <div id="cryptx" className="tile" ref={cryptx}></div>
        <div id="surprise" className="tile" ref={surprise}></div>
        <div id="idealise" className="tile" ref={idealise}></div>
      </div>
      {showCard && (
        <div className="card-background" onClick={toggleCard}>
          <Card event={clicked} />
        </div>
      )}
      <div className="info">
        {isMobile?(
          <Info event={current} />
        ):(active ? (
          <Info event={active} />
        ) : (
          <h1 className="info-text">
            Hover over the tiles for date, time and venue. Click to know more</h1>
        ))}
      </div>
    </div>
  );
}
