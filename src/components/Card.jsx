import React, {useState} from 'react'
import './Card.css'
export default function Card(props){
    const {event}= props;
    return (
        <div className="card">
            <img className= "image" src="../assets/tile-bg.jpg"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquid? Corrupti veniam in, nemo ab suscipit vitae hic nesciunt excepturi molestias dolorum. Veritatis earum, sit non exercitationem enim quas saepe.</p>
            <a href= "#"><button className="register-button">Register Now</button></a>
        </div>
    )

}