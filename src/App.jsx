import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse'
import Login from './components/Login'


function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
