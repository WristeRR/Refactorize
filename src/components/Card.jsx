import React, {useState} from 'react'
import './Card.css'

const eventList ={
    SYNTHESIZE: "The name tells half the story. Participate in Randomize's 36-hour hackathon and get a chance to prove that you have what it takes to change the world.",
    PANEL: "This is a Q&A panel discussion on AWS, featuring highly successful individuals in the field.",
    VISUALISE: "An event which walks us through basics of design theory, with a bit of a hands-on experience on software’s like photoshop",
    CRYPTX: "A fun cryptic hunt that will make you scratch your head.",
    SURPRISE: `He's a transposter!!! You can get your very own "that's not even a word!!" moment too at Randomize's trivia event "Surprise". Brush up your hand-raising skills and get ready for this one of a kind trivia competition. `,
    IDEATHON: "This event provides a platform for innovative minds to showcase their ideas on both tech and non-tech problem statements in front of a panel."
}

export default function Card(props){
    const {event}= props;
    function getEventName(event){
        if (event === 1){
            return "SYNTHESIZE";
        } else if (event === 2){
            return "PANEL";
        } else if (event === 3){
            return "VISUALISE";
        } else if (event === 4){
            return "CRYPTX";
        } else if (event === 5){
            return "SURPRISE";
        } else if (event === 6){
            return "IDEATHON"
        }
    }

    console.log(event);

    const eventName= getEventName(event);
    return (
        <div className="card">
            <img className= "image"/>
            <span>{eventList[eventName]}</span>
            <a href= "#"><button className="register-button">Register Now</button></a>
        </div>
    )

}