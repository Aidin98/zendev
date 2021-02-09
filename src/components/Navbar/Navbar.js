import React from "react"
import {MenuItems} from './Menuitems'
import './Navbar.css'
import {Button} from "../Button"
class Navbar extends React.Component{
  state={
    clicked:false
  }
handleClick=()=>{
  this.setState({clicked: !this.state.clicked})

}
  render(){
  return(
    <nav className='NavbarItems'>
      <div className='navbar-logo'><a href='https://www.zendev.se/en'><img src='https://www.zendev.se/images/logo.png' alt=''logo/></a></div>
      <div className='menu-icon' onClick={this.handleClick}>
            <i className={this.state.clicked  ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={this.state.clicked  ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item,index) => {
          return (
            <li key={index}>
              <a className={item.cName} href='item.url'>
                {item.title}
              </a>
              </li>
          )
        }  ) }
      
        
      </ul>
      <button className='dugme'>Contact us</button>
    </nav>
  )
}
}


export default Navbar