import React from 'react';
import './Info.css';

const eventList={
    synthesise:{
        venue: "TBD",
        date: "24th March 2023",
        time: "TBD"
    },
    panel:{
        venue: "TBD",
        date: "26th March 2023",
        time: "TBD"
    },
    visualise:{
        venue: "TBD",
        date: "25th March 2023",
        time: "TBD"
    },
    cryptx:{
        venue: "TBD",
        date: "24th March 2023",
        time: "TBD"
    },
    surprise:{
        venue: "TBD",
        date: "26th March 2023",
        time: "TBD"
    },
    idealise:{
        venue: "TBD",
        date: "26th March 2023",
        time: "TBD"
    }
    
}

export default function Info(props){
    const {event}= props;

    function getEventName(){
        if (event === 1){
            return "synthesise"
        }
        if (event === 2){
            return "panel"
        }
        if (event === 3){
            return "visualise"
        }
        if (event === 4){
            return "cryptx"
        }
        if (event === 5){
            return "surprise"
        }
        if (event === 6){
            return "idealise"
        }
    }
    const eventName= getEventName();
    return (
        <div className="info">
            <h1 id="venue">Venue: {eventList[eventName].venue}</h1>
            <h2 id="date">Date: {eventList[eventName].date}</h2>
            <h2 id="time">Time: {eventList[eventName].time}</h2>
        </div>
    )
}