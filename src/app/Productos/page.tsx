//'use client'
import { useEffect, useState } from "react"
import axios from "axios"

//const fetcher = (url: string) => fetch(url).then(r => r.json())
/**
 * FETCH url => response => JSON PAGE
 * AXIOS
 * useSWR
 * 
 * 
 * @returns 
 */
const Page = async ()=>{

    axios.get('http://localhost:3000/api/producto')
    .then(response=>{
        console.log(response)
    })
    //Consumir Api
    return (<>

    </>)
}

export default Page

interface producto{
    Nombre: string,
    Descripcion: string,
    Costo: number
}