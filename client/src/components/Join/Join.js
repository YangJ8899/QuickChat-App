import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typing from 'react-typing-animation';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnerContainer">
                <h1 className = "heading">Welcome to <Typing>Quick Chat</Typing></h1>
                <div><input placeholder = "Please enter your name" className = "joinInput" type= "text" onChange = {(event) => setName(event.target.value)} /></div>
                <div><input placeholder = "Please enter a room you wish to join" className = "joinInput mt-20" type= "text" onChange = {(event) => setRoom(event.target.value)} /></div>
                <Link onClick = {event => (!name || !room) ? event.preventDefault(alert('please enter all required fields')) : null} to ={`/chat?name=${name}&room=${room}`}>
                    <button className = "button mt-20" type="submit">Join Chat Room</button>
                </Link>

            </div>
        </div>
    )
}

export default Join;