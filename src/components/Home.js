import React from 'react'

export default function Home(props) {

    let { title, status, changeStatus } = props;

    return (
        <div className='show'>
            <h2>{ }</h2>
            <button onClick={() => changeStatus()} className={status ? "btn-success" : "btn-primary"}>Show users</button>
        </div>
    )
}
