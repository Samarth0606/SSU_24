import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        {/* <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a> */}

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>

    </div>
  )
}

export default Home