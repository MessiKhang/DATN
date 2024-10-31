import React from 'react'
import Header from '../HeaderComponent/Header'
import Menu from '../MenuComponent/Menu'
const DefaultComponent = ({children}) => {
  return (
    <div>
        <Header/>
        <Menu/>
        {children}

    </div>
  )
}

export default DefaultComponent