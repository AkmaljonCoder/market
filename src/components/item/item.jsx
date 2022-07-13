import React from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonDiv, Container, Image, ImgDiv, InBtn, InDes, InfoDiv, InPrice, InRating, InTitle } from './style'

const Item = () => {

  const Location = useLocation()

  return (
    <Container>
      <ImgDiv>
        <img style={{width:400,height:400,objectFit:'contain'}} src={Location.state.image} alt="" />
      </ImgDiv>
      <InfoDiv>
        <InTitle>{Location.state.title}</InTitle>
        <InDes>Description: {Location.state.description}</InDes>
        <InPrice>${Location.state.price}</InPrice>
        <InRating>Rating: {Location.state.rating.rate}</InRating>
        <ButtonDiv>
          <InBtn variant='contained' color='success'>Buy Now</InBtn>
          <InBtn variant='contained' >Make Offer</InBtn>
        </ButtonDiv>
      </InfoDiv>
    </Container>
  )
}

export default Item