import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { About } from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import AppLayout from './components/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  // Using children props for layout
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/about',
              element: <About />,
            },
            {
              path: '/country',
              element: <Country />,
            },
            {
              path: '/contact',
              element: <Contact />,
            },
        ]
      },
    ]
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App