
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const NavBar = () => {
  const {token,handleLogout} = useContext(UserContext);
  const {cart} = useContext(CartContext);

  return (
    <nav className="bg-black h-12 text-white flex items-center  justify-between px-6 sticky top-0 z-50">
    <div>
      <h1 className="uppercase font-medium">Shopping app</h1>
    </div>
    <div>
      <ul className="flex space-x-2">
        <li className="cursor-pointer hover:text-orange-300 transition-all ease-in-out duration-500"><Link to="/">Home</Link></li>
        {
          !token ?
          <li className="cursor-pointer hover:text-orange-300 transition-all ease-in-out duration-500"><Link to="/login">Login</Link></li>
          : <li onClick={handleLogout} className="cursor-pointer hover:text-orange-300 transition-all ease-in-out duration-500">Logout</li>
        }
      </ul>
    </div>
    <div>
      {
       token ?
      <span>
        <Link to="/card">
       <i className='fa fa-shopping-cart text-lg cursor-pointer'> {cart ? cart.length : 0}</i>
       </Link>
      </span> : <span></span>
      }
    </div>
  </nav>
  )
}

export default NavBar;