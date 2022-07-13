import styled from 'styled-components'
import { Button, Rating } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 50px;
    color: #2b75ff;
    text-align: center;
    margin: 20px;
    display: block;
`

export const ShopBox = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: relative;
    margin: 18px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        transition: all ease 0.5s;
        transform: scale(1.1);
    }
`

export const Img = styled.img`
    width: 100%;
    height: 140px;
    transition: all ease 0.5s;
    object-fit: contain;
`

export const BoxTitle = styled.h2`
    font-size: 25px;
    padding: 10px;
`

export const BoxPrg = styled.p`
    font-size: 15px;
    padding:10px;
`

export const AddBtn = styled(Button)`
    background-color: #197dff !important;
    color: white !important;
    position: absolute;
    bottom: 10px !important;
    left: 10px !important;
`

export const AddIcon = styled(ShoppingCartIcon)`
    color: white !important;
`

export const CartRating = styled(Rating)`
    position: absolute !important;
    bottom: 20px !important;
    right: 10px !important;
`

