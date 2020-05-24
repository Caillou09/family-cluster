import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'


const MenuBurger = ({openModal}) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen)
  }

  const onClickModal = () => {
    setMenuOpen(false)
    openModal()
  }

  return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}>
            <Link onClick={closeMenu} id="home" className="menu-item" to="/">Accueil</Link>
            <Link onClick={closeMenu} id="about" className="menu-item" to="/createwod">Créer Wod</Link>
            <Link onClick={onClickModal} id="about" className="menu-item">Créer Exo</Link>
        </Menu>
      </div>
  )
}

export default MenuBurger
