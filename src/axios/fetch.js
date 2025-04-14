import axios from "axios";
import { useState } from "react";


export const fetchUser = async() => {
    try{
        const response = await axios.get("https://67eb80a3aa794fb3222a7528.mockapi.io/users/test")
        console.log(response.data)
        return response.data
        
    }
    catch(err){
        console.log(err)
    }
}
    




