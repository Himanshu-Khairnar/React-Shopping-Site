import  { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProdict from '../Components/RelatedProduct/RelatedProdict'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProdict/>
    </div>
  )
}

export default Product
