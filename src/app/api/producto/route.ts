import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json(productos)
}
//lista objetos JS
let productos = [
    {
        Nombre: "Producto 1",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 2",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 3",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 4",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 5",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 6",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
    {
        Nombre: "Producto 7",
        Descripcion: "Producto descripcion",
        Costo: 300
    },
]