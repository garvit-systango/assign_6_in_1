import React, { useEffect, useMemo, useState } from 'react'
import { fetchUser } from '../axios/fetch'



function UseMemo() {
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

    const filterProduct = useMemo(() => {
      return product.filter(item => 
        item.productName.toLowerCase().startsWith(search.toLowerCase())
      )
    }, [product, search])

  return (
    <>
      <input 
      type='text'
      onChange={(e) => setsearch(e.target.value)}
      value={search}
      placeholder='Search here...'
      />
      <ul>
        {filterProduct.map((item) => <li key={item.id}>{item.productName}</li>)}
      </ul>

    </>
  )
}

export default UseMemo
