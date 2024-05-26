'use client'
import { useState } from 'react'
import styles from './styles.module.css'
import Card from '@/Componentes/Card/'

const Page = () => {
    const [valor, setValor] = useState('Hola mundo')
    /** */
    return <>
        <div className={styles.containerCard}>
          
        </div>
    </>
}

export default Page