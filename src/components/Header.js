import {LOGO_URL} from '../utils/constants';
import { useState ,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineCheck from '../utils/useOnlineCheck';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName,setbtnName] = useState('Login')
    const isOnline = useOnlineCheck();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (<div className='header'> 
               <div className='logo-container'>
                   <img className="logo" src={require('../images/pngegg.png')}></img>
               </div>
               <div className='nav-items'>
                   <ul >
                       <li className='bg-pink'><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li>Contact</li>
                       <li><Link to="/grocery">Grocery</Link></li>
                       <li><Link to="/cart">Cart<span className='upper-power'>{cartItems.length}</span></Link></li>
                       <li>Status: {isOnline ? <span className='online-offline'>🟢</span>:<span>🔴</span>}</li>
                       {
                        (btnName==='Logout') ? <li> Welcome:{loggedInUser}</li>:''
                       }
                       <button className='login' onClick={()=>{
                        btnName == 'Login' ? setbtnName('Logout'):setbtnName('Login')
                        
                       }}>{btnName}</button>
                   </ul>
               </div>
           </div>
           )
   };

   export default Header