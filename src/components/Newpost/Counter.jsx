import React, { useState ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../../styles/addpost.css'

export default function Counter(props) {
    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);
    const HandleUpvote = () => {
        setUpvote(0);
        setUpvote(upvote + 1);
    }
    const HandleDownvote = () => {
        setDownvote(0);
        setDownvote(downvote + 1);
    }
    return (
        <div className='counter'>
            <div>
                <button className='upvote' onClick={HandleUpvote} ><FontAwesomeIcon icon={faArrowUp} /></button>
                <p className='vote'>{upvote}</p>
            </div>
            <div>
                <button className='downvote' onClick={HandleDownvote}><FontAwesomeIcon icon={faArrowDown} /></button>
                <p className='vote'>{downvote}</p>
            </div>
            <span className='textarea'>{props.object}</span>
        </div>
    )
}
