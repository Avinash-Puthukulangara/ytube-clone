import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo3.png'
import search_icon from '../../assets/search.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/user6.jpg'

export const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() =>setSidebar(prev=>prev===false?true:false) } src={menu_icon} alt=''></img>
        <img className='logo' src={logo} alt=''></img>
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <img src={search_icon} alt='' />
        </div>
      </div>

      <div className='nav-right flex-div'>
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className='user-icon' />
      </div>
    </nav>
  )
}
export default Navbar