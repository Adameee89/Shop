import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

//clerk
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import store from './store/store.js'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </ClerkProvider>
  </React.StrictMode>

)
