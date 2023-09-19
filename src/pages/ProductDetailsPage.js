import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetailsPage = () => {
  const{id}= useParams();
  console.log(id);
  return (
    <div>ProductDetailsPages</div>
  )
}

export default ProductDetailsPage