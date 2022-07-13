import {React , useState , useEffect} from 'react'
import { Container, ShopBox, Img, BoxTitle, BoxPrg, AddBtn, AddIcon, TitleDiv, Title, CartRating} from './style'
import axios, { Axios } from 'axios'
import Loading from './../loading/Loading'
import { useNavigate } from 'react-router-dom'

const ProductsApi = 'https://fakestoreapi.com/products'

const Products = () => {
  
  let navigation = useNavigate()
  
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    try {
      axios.get(ProductsApi)
      .then(res => {
        setdata(res.data)
        setloading(true)
      })
    } catch (error) {
      console.log(error);
    } 
  }, [])
  
  let localData = []

  function addCart(item){
    localData.push(item)
    localStorage.setItem('dataCart' , JSON.stringify(localData))
  }

  function toItem(item){
    navigation('/item',{state:item})
  }

  return (
    <Container>
      <TitleDiv>
        <Title>WELCOME TO OUR SHOP</Title>
      </TitleDiv>
        {
          loading ? 
          data?.map((item,index)=>{
            return (
              <ShopBox key={index}>
                <Img onClick={()=>toItem(item)} src={item.image} />
                <BoxTitle>{item.title.slice(0,35)}</BoxTitle>
                <BoxPrg>{item.description.slice(0,60)}{'...'}</BoxPrg>
                <AddBtn onClick={()=>addCart(item)} startIcon={<AddIcon/>} >ADD TO CART</AddBtn>
                <CartRating value={item.rating.rate} />
              </ShopBox>
            )
          }) : <div style={{width:'100%',height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}} >
                 <Loading />
              </div>

        }

    </Container>

  )
}

export default Products