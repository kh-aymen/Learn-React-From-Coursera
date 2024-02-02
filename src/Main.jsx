import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <p>first Project <Link to={'/project1'}>here</Link></p>
        </>
    )
}

export default Main