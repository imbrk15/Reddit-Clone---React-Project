import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../../styles/addpost.css'
import Sidebar from './Sidebar';

export default function Prevpost() {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    useEffect(() => {
        setUpvote(JSON.parse(window.localStorage.getItem('upvote')));
        setDownvote(JSON.parse(window.localStorage.getItem('downvote')));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('upvote', upvote);
        window.localStorage.setItem('downvote', downvote);
    }, [upvote, downvote])
    const HandleUpvote = () => {
        setUpvote(0);
        setUpvote(upvote + 1);
    }
    const HandleDownvote = () => {
        setDownvote(0);
        setDownvote(downvote + 1);
    }
    return (
        <>
            <Sidebar />
            <div className='counter'>
                <div>
                    <button className='upvote' onClick={HandleUpvote} ><FontAwesomeIcon icon={faArrowUp} /></button>
                    <p className='vote'>{upvote}</p>
                </div>
                <div>
                    <button className='downvote' onClick={HandleDownvote}><FontAwesomeIcon icon={faArrowDown} /></button>
                    <p className='vote'>{downvote}</p>
                </div>
                <div className='post addpost prevpost' style={{ height: 45 }}>This is the first post</div>
            </div>
        </>
    )
}
