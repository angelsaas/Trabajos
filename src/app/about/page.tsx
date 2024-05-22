'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Card from '@/Componentes/Card/'

const Page = () => {
    const [valor, setValor] = useState('Hola mundo')
    /** */
    return <>
        <div 
        style={{height: '100vh'}}
        >
            <div className={styles.testStyle}>
                Otro elemento JSX 3
                <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
            </div>

            <h1>{valor}</h1>
            <Card icono='icono2' titulo='titulo2' descripcion='descripcion2'></Card>
        </div>


    </>
}

export default Page