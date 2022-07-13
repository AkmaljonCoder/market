import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TextDiv = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 30px;
`

export const Title = styled.h1`
    font-size: 45px;
    color: #2b75ff;
    margin-bottom: 30px;
`

export const Paragraph = styled.p`
    font-size: 20px;
    color: black;
    margin-bottom: 30px;
`

export const Btn = styled(Button)`
    color: #fff !important;
    background-color: #2b75ff !important;
    border-radius: 10px !important;
`

export const Image = styled.img`
    height: 450px;
    margin-right: 30px;
`
