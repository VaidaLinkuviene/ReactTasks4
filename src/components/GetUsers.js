import React, { useState, useEffect } from 'react'


function GetUsers() {

    const [resource, setResource] = useState('posts');
    const [items, setItems] = useState([]);


    const getAll = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
        const data = await response.json();
        setItems(data);
    };
    useEffect(() => {
        getAll();
    }, [resource]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    //         .then(response => response.json())
    //         .then(json => setShow(json))
    // }, [resource])


    return (



        <div>
            <h2> {resource}</h2>
            <button onClick={() => setResource('posts')} >Posts </button>
            <button onClick={() => setResource('comments')} >Comments </button>
            <button onClick={() => setResource('albums')} >Albums </button>
            <button onClick={() => setResource('photos')} >Photos </button>
            <button onClick={() => setResource('todos')} >Todos </button>
            <button onClick={() => setResource('users')} >Users </button>
            {resource && items.map(item => {
                return <p>{JSON.stringify(item)}</p>
            })}


        </div >
    )
}

export default GetUsers