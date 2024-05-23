'use client'
import { useEffect, useState } from "react"
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Page = () => {
    let ProductosArray = [] as Array<producto>

    const { data: ProductosData, error, isLoading } = useSWR('/api/producto', fetcher)

    if (ProductosData) ProductosArray = ProductosData

    return (<>
        <div>{
            ProductosArray.map((item, index)=>{
                return <p key={index}>{item.Nombre} {item.Costo}</p>
            })
        }</div>
    </>)
}

export default Page

interface producto {
    Nombre: string,
    Descripcion: string,
    Costo: number
}