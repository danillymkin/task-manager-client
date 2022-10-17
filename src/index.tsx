import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DashboardLayout from './components/layouts/DashboardLayout/DashboardLayout'
import Dashboard from './components/pages/Dashboard/Dashboard'
import ErrorPage from './components/pages/ErrorPage/ErrorPage'
import TasksPage from './components/pages/TasksPage/TasksPage'
import TasksToday from './components/widgets/TasksToday/TasksToday'
import { DashboardProvider } from './context/DashboardContext'
import { ThemeProvider } from './context/ThemeContext'

import './index.css'

import 'dayjs/locale/ru'

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'tasks',
        element: <TasksPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'today',
            element: <TasksToday />,
            index: true,
          },
          {
            path: 'incoming',
            element: <h1>incoming</h1>,
          },
          {
            path: 'upcoming',
            element: <h1>upcoming</h1>,
          },
        ],
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <DashboardProvider>
        <RouterProvider router={router} />
      </DashboardProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
