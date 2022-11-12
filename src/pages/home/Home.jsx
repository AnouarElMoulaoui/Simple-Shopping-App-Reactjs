
import React, { useContext } from 'react'
import NavBar from '../../components/NavBar';
import Products from '../../components/products/Products';
import { UserContext } from '../../contexts/UserContext';

const Home = () =>{
  const {token} = useContext(UserContext);
  if(token)
    console.log('token',token);
  return (
    <div>
        <NavBar/>
        <Products/>
    </div>
  )
}

export default Home;