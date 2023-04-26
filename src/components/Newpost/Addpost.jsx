import React, { useState, useEffect } from 'react'
import Newpost from './Newpost'
import Counter from './Counter'
import '../../styles/addpost.css';
import Prevpost from './Prevpost';
// import Sidebar from './Sidebar';

export default function Addpost() {
    const [data, setData] = useState('');
    const [array, setArray] = useState([])
    // const localStoredValues = JSON.parse(window.localStorage.getItem('localValue'))
    const Handlesave = () => {
        let newarray = [...array, data]
        setArray(newarray);
        setData('');
        // localStorage.setItem('localValue', JSON.stringify(newarray))
        // e.preventDefault();
    }

    return (

        <>
            <Newpost setData={setData} save={Handlesave} />
            <Prevpost />
            <div className='addpost'>
                <div>
                    {
                        array.map((obj, index) => <div className='post' key={index}>{<Counter object={obj} />}</div>)
                    }
                </div>
            </div>

        </>

    )
}
