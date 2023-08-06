import {LOGO_URL} from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineCheck from '../utils/useOnlineCheck';

const Header = () => {
    const [btnName,setbtnName] = useState('Login')
    const isOnline = useOnlineCheck()
    return (<div className='header'> 
               <div className='logo-container'>
                   <img className="logo" src={require('../images/pngegg.png')}></img>
               </div>
               <div className='nav-items'>
                   <ul >
                       <li className='bg-pink'><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li>Contact</li>
                       <li>Cart</li>
                       <li>Status: {isOnline ? '🟢':'🔴'}</li>
                       <button className='login' onClick={()=>{
                        btnName == 'Login' ? setbtnName('Logout'):setbtnName('Login')
                        
                       }}>{btnName}</button>
                   </ul>
               </div>
           </div>
           )
   };

   export default Header