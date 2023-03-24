import React from 'react';
import './Info.css';

const eventList={
    synthesise:{
        venue: "Smt.Sharada Pai Auditorium",
        date: "31st March 2023",
        time: "1:30 pm start"
    },
    panel:{
        venue: "Smt.Sharada Pai Auditorium",
        date: "31st March 2023",
        time: "2:00 to 3:30 pm"
    },
    visualise:{
        venue: "Smt.Sharada Pai Auditorium",
        date: "1st April 2023",
        time: "4:00 to 6:00 pm"
    },
    cryptx:{
        venue: "Discord",
        date: "1st April 2023",
        time: "2:00 pm start"
    },
    surprise:{
        venue: "Discord",
        date: "1st April 2023",
        time: "Round 1 7:00 to 8:00 pm"
    },
    idealise:{
        venue: "Smt.Sharada Pai Auditorium",
        date: "31st March 2023",
        time: "12:30 pm"
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