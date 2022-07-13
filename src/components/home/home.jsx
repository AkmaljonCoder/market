import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Btn, Container, Image, Logo, Paragraph, TextDiv, Title } from './style'
import Imagee from './images/Logo.svg'

const Home = () => {

  let navigation = useNavigate()

  let Ishla = ()=>{
    navigation('/Products')
  }

  return (
    <Container>
      <TextDiv>
        <Title>GLOBUS TRADE CENTER</Title>
        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate vitae et qui aperiam quam non id dicta aliquam soluta voluptatum est officiis ad, dolorum architecto minus! Voluptas, praesentium placeat?</Paragraph>
        <Btn onClick={Ishla} >Let's shopping</Btn>
      </TextDiv>
      <Image src={Imagee} />
    </Container>
  )
}

export default Home