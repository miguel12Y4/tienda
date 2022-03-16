import React, { useEffect, useState }from 'react'

import styles from '../styles/cardProduct.module.css'

const imgs = ['https://picsum.photos/680/401', 'https://picsum.photos/680/400', 'https://picsum.photos/680/402']

export default function CardProduct({title, description, precio, cantidad, modelo, pagination}) {

  const [imgIdx, setImg] = useState(0)

  const [active, setActive] = useState(true)

	const nextImg = ()=>{
    if(!active) return

		setImg(idx=>{
			const i = (idx%imgs.length)+1
			if(i>=imgs.length){
				return 0;
			}
			return i;
		})
	}

	useEffect(()=>{
    if(pagination){
      setInterval(()=>{
        nextImg()
      }, 6000)
    }
	},[])


  const classnames = (idx) => {
    if (imgIdx === idx) return styles.active

    if (imgIdx - 1 === idx) {
      return styles.noActive
    } else if (imgIdx === 0 && idx === imgs.length - 1) {
      return styles.noActive
    }
  }


  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.containerImg}>
        {!pagination && <img src={'/images/loading.gif'} className={styles.active} alt="" />}
        {pagination && imgs.map((item, idx) => <img key={idx} src={item} alt="" className={classnames(idx)} />)}
      </div>
      <div className={styles.detalle}>
        <span>Modelo: {modelo}</span>
        <span>Precio: {precio}</span>
        <span>Cantidad: {cantidad}</span>
      </div>
      <button>Detalles</button>
      <button>Comprar</button>
    </div>
  )
}
