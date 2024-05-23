'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Card from '@/Componentes/Card/'

const Page = () => {
    const [valor, setValor] = useState('Hola mundo')
    /** */
    return <>
        <div className={styles.containerCard}>
            <div className={styles.containerContent}>
                <Card icono='icono2' titulo='titulo2' descripcion='descripcion2'></Card>
                <Card icono='icono2' titulo='titulo2' descripcion='descripcion2'></Card>
                <Card icono='icono2' titulo='titulo2' descripcion='descripcion2'></Card>
            </div>
        </div>
    </>
}

export default Page