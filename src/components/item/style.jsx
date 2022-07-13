import { Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 90vh 90vh;
    grid-template-areas: 
    "img info"
    ;
`

export const ImgDiv = styled.div`
    grid-area: img;
    display: flex;
    justify-content: center;
    align-items: center;
`

// export const Image = styled.image`
//     width: 500px;
//     height: 500px;
//     object-fit: contain;
// `

export const InfoDiv = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`

export const InTitle = styled.h1`
    font-size: 50px;
    color: black;
`

export const InDes = styled.p`
    font-size: 15px;
    color: #4e4e4e;
`

export const InPrice = styled.h2`
    font-size: 25px;
    color: orange;
`

export const InRating = styled.h2`
    font-size: 25px;
    color: black;
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const InBtn = styled(Button)`
    width: 300px !important;
    margin-right: 40px !important;
`



