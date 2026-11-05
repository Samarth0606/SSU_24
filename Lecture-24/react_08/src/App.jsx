import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=>import('./components/Dashboard') )
// import Profile from './components/Profile'
const Profile = React.lazy( ()=>import('./components/Profile') )

function App() {
  return (
    <div>
      <h1>Hello to App</h1>

      {/* routes */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Suspense fallback="profile loading..."> <Profile /> </Suspense>} path="/profile" />
        <Route element={<Suspense fallback="dashboard loading..."> <Dashboard /> </Suspense>} path="/dashboard" />
        
      </Routes>


    </div>
  )
}

export default App