import React from 'react'
import {Container, Link, LinkDiv, Logo} from './style'
import Logoo from './Logos/GLOBUS.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
const navbar = () => {
  return (
    <Container>
      <Logo src={Logoo} />
      <LinkDiv>
        <Link to={'/'} >Home</Link>
        <Link to={'/products'} >Products</Link>
        <Link to={'/contact'} >Contact</Link>
        <IconButton to={'/cart'} LinkComponent={NavLink}>
          <ShoppingCartIcon />
        </IconButton>
      </LinkDiv>
    </Container>
  )
}

export default navbar