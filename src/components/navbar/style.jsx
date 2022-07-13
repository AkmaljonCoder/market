import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 3px 9px 0px rgba(34, 60, 80, 0.2);
`

export const Logo = styled.img`
    height: 80px;
    margin-left: 30px;
    cursor: pointer;
`

export const LinkDiv = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 20px;
`

export const Link = styled(NavLink)`
    text-decoration: none !important;
    color: #111 !important;
    font-size: 20px !important;
`


