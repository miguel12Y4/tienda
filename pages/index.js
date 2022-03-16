import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import CardProduct from 'components/CardProduct'

import styles from '../styles/index.module.css'

import api from '../products/api'




export default function FirstPost({destacados}) {

	return (
		<>
			<Head>
				<title>Tienda de productos</title>
			</Head>
			<section id="inicio" className={styles.container}>
				<div>
					<img className={styles.imgBack} src="https://picsum.photos/1920/1080" />
					<div className={styles.containerInfo}>
						<div >
							<h1>Los mejores productos de computación a los mejores precios</h1>
							<p>Encuentra: Computadores, Monitores, PCs de escritorio, Accesorios y más</p>
						</div>
						<div>
							<img src="https://picsum.photos/90" alt="" />
						</div>
					</div>
				</div>
			</section>
					<div className={styles.destacados}>
					{destacados.map((item, idx) =><CardProduct key={idx} pagination={true} modelo={item.Modelo} precio={item.Precio} cantidad={item.Cantidad} title={item.Nombre}/>)}
					</div>

		</>
	)
}


export async function getStaticProps() {

    return {
        props: {
            destacados: await api.destacados(),
        }
    }
};