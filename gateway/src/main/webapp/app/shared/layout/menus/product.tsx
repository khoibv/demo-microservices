import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

const productMenuItemsAuthenticated = (
  <>
    <MenuItem icon="wrench" to="/product">
      <Translate contentKey="global.menu.product.main">Product</Translate>
    </MenuItem>
  </>
);

const productMenuItems = (
  <>
    <MenuItem id="login-item" icon="sign-in-alt" to="/login">
      <Translate contentKey="global.menu.product.login">Sign in</Translate>
    </MenuItem>
    <MenuItem icon="sign-in-alt" to="/account/register">
      <Translate contentKey="global.menu.product.register">Register</Translate>
    </MenuItem>
  </>
);

export const ProductMenu = ({ isAuthenticated = false }) => (
  <NavDropdown icon="user" name={translate('global.menu.product.main')} id="product-menu">
    {isAuthenticated ? productMenuItemsAuthenticated : productMenuItems}
  </NavDropdown>
);

export default ProductMenu;
