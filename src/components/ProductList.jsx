import React, { useEffect, useMemo, useState } from 'react'
import { fetchUser } from '../axios/fetch'



function ProductList() {
  const [product, setProduct] = useState([])
  const [search, setsearch] = useState('')
  
    useEffect(() => {const getData = async()=>{
      try{
        const result = await fetchUser()
        setProduct(result.data)
      }
      catch(error){
        console.log(error.message)
      }
    }      
    getData()
    }, [])

    console.log("data", product)

  return (
    <>
      <input 
      type='text'
      onChange={(e) => setsearch(e.target.value)}
      value={search}
      placeholder='Search here...'
      />
      <ul>
        {product.map((item) =>item.productName.toLowerCase().startsWith(search.toLowerCase()) && <li key={item.id}>{item.productName}</li>)}
      </ul>

    </>
  )
}

export default ProductList
