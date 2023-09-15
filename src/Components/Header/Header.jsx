import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

  const [menuOpened, SetMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: menuOpened ? "0" : "-100%"
      };
    }
    return {};
  }

  return (
    <section className="h-wrapper">
      <div className="h-container flexcenter paddings innerwidth">
        <img src="./logo.png" alt="" srcSet="" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            SetMenuOpened(false);
          }}
        >
          <div className="h-menu flexcenter" style={getMenuStyles(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <a href="">Contac Us</a>
            <a href="">Get Started</a>
            <button className='button'>
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => SetMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header
