import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import SignUp from './Pages/SignUp.jsx';
import { Provider } from 'react-redux'
import { store } from './Store.js';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: Shop },
      { path: "Contact", Component: Contact },
      { path: "About", Component: About },
      { path: "SignUp", Component: SignUp },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
