import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'
import firebaseApp from '../base'
import {Icon} from 'semantic-ui-react';

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

  const handleSignout = () => {
    firebaseApp.auth().signOut()
    setMenuOpen(false)
  }

  return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0
      }}>
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
          customBurgerIcon={ <Icon name="setting" size='big'/> }>
            <Link onClick={closeMenu} className="menu-item" to="/">Accueil</Link>
            <Link onClick={closeMenu} className="menu-item" to="/createwod">Créer Wod</Link>
            <Link onClick={onClickModal} className="menu-item">Créer Exo</Link>
            <Link
              onClick={handleSignout}
              className="menu-item"
              to="/connexion"><Icon name='log out'/>Déconnexion</Link>
        </Menu>
      </div>
  )
}

export default MenuBurger
