import React from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTask from "../pages/createTask"
import Home from "../pages/home"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/form',
        element: <CreateTask />
    }
])

const Routes = () => <RouterProvider router={routes} />

export default Routes