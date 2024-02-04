import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <p>Project 1 <Link to={'/project1'}>here</Link></p>
            <p>Project 2 <Link to={'/project2'}>here</Link></p>
            <p>Project 3 <Link to={'/project3'}>here</Link></p>
        </>
    )
}

export default Main