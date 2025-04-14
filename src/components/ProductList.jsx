import axios from 'axios'
import React, { useEffect } from 'react'
import { fetchUser } from '../axios/fetch'



function ProductList() {

    useEffect(() => {
        fetchUser()

    }, [])

  return (
    <>
    </>
  )
}

export default ProductList
