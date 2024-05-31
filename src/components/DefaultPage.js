import React, {useEffect} from 'react'
import Body from './Body';
import Header from './Header';
import Login from './Login';


const DefaultPage = () => {

  return (
    <div>     
        <Header/>
        <Login/>
        <Body/>     
    </div>
  )
}

export default DefaultPage;