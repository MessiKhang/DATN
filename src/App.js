import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routes } from './routers'
import './index.css';
function App() {

  return (
    <div>
      <Router>
        <Routes>
        {routes.map((route)=>{
          const Page = route.page
          const Layout = route.showHeader && route.showMenu  ? DefaultComponent: Fragment;
          return( 
            
            <Route key={route.path} path={route.path} element={ <Layout><Page/></Layout>} />
          )
        })}
        </Routes>
        
      </Router>
    </div>
  )
}
export  default App;