import React, {useEffect, useState, useCallback, useMemo} from 'react'

import Head from 'next/head'

import styles from '../styles/productos.module.css'
import CardProduct from 'components/CardProduct'

import api from '../products/api'


const modo = {
    todo: 1,
    notebook:2,
    monitor:3,
    pc:4,
    accesorios:5,
}

export default function Productos({ notebooks, monitores, pcs, accesorios }) {
    const list = [...notebooks, ...monitores, ...pcs, ...accesorios]

    const [productos, setProdutos] = useState(list);

    const [titleModo, setTitle] = useState('Todos')


    const [pagination, setPagination] = useState(false)


    const pages = useMemo(()=>{
        return productos.reduce((acum, curr, index)=>{
            const idx = Math.floor(index/6)
            acum[idx] = (acum && acum[idx])?acum[idx]:[]
            acum[idx].push(curr)
            return acum
        },[])

    },[productos])

    const [currentPage, seCurrentPage] = useState(0)

    const changeProducts = (mod)=>{
        if(mod===modo.todo){
            setProdutos(list);
            setTitle('Todos');
        }else if(mod===modo.notebook){
            setProdutos(notebooks)
            setTitle('Notebooks');
        }else if(mod===modo.monitor){
            setProdutos(monitores)
            setTitle('Monitores');
        }else if(mod===modo.pc){
            setProdutos(pcs)
            setTitle('PCs de escritorio');
        }else if(mod===modo.accesorios){
            setProdutos(accesorios)
            setTitle('Accesorios');
        }
    }
    
    useEffect(()=>{
        setPagination(true)

    },[])

    const handleNextPage = (page)=>{
        seCurrentPage(page)
    }

    const handleChange = (m)=>{
        changeProducts(m);
        seCurrentPage(0)
    }

    const getTitle = ()=>{
        switch (titleModo) {
            case 'Todos':
                return 'Todos los productos'
        
            default:
                return titleModo
        }
    }   

    return (
        <>
            <Head>
                <title>Productos</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h1>Listado de {getTitle()}</h1>
                </div>
                <div className={styles.containerProducts}>
                    {!pagination && productos?.map((item, idx) =><CardProduct key={idx} pagination={pagination} modelo={item.Modelo} precio={item.Precio} cantidad={item.Cantidad} title={item.Nombre} item={item}/>)}
                    {pagination && 
                    <div>
                        <div className={styles.containerProducts}>
                            {pages[currentPage].map((item, idx) =><CardProduct key={idx} pagination={pagination} modelo={item.Modelo} precio={item.Precio} cantidad={item.Cantidad} title={item.Nombre} item={item}/>)}
                        </div>
                        <div className={styles.containerPages}>
                            {pages.map((_, idx) => <button className={idx===currentPage?styles.btnActive:styles.btnPage} key={idx} onClick={()=>handleNextPage(idx)}>{idx+1}</button>)}
                        </div>
                    </div>
                    }
                </div>
                <aside className={styles.aside}>
                    <ul>
                        <li>
                            <button onClick={() => handleChange(modo.todo)}>
                                Todos
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleChange(modo.notebook)}>
                                Notebooks
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleChange(modo.monitor)}>
                                Monitores
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleChange(modo.pc)}>
                                PCs de escritorio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleChange(modo.accesorios)}>
                                Accesorios
                            </button>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
};


export async function getStaticProps() {

    return {
        props: {
            notebooks: await api.notebooks(),
            monitores: await api.monitores(),
            pcs: await api.pcs(),
            accesorios: await api.accesorios(),
        },
        revalidate:86400,
    }
};