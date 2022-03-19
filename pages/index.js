import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import CardProduct from 'components/CardProduct'

import styles from '../styles/index.module.css'

import api from '../products/api'




export default function FirstPost({ destacados }) {

	return (
		<div className={styles.cont}>
			<Head>
				<title>Tienda de productos</title>
			</Head>
			<section id="inicio" className={styles.container}>
				<div>
					<img className={styles.imgBack} src="/images/fondo.jpg" alt=""/>
					<div className={styles.containerInfo}>
						<div >
							<h1>Los mejores productos de computación a los mejores precios</h1>
							<p>Encuentra: Computadores, Monitores, PCs de escritorio, Accesorios y más</p>
						</div>
						<div className={styles.imgRigth}>
							<img src="/images/pc.svg" alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className={styles.containerDestacados}>
				<h2>Productos destacados</h2>
				<div className={styles.destacados}>
					{destacados.map((item, idx) => <CardProduct key={idx} pagination={true} modelo={item.Modelo} precio={item.Precio} cantidad={item.Cantidad} title={item.Nombre} item={item}/>)}
				</div>
			</section>

		</div>
	)
}


export async function getStaticProps() {

	return {
		props: {
			destacados: await api.destacados(),
		},
		revalidate: 86400
	}
};