import React, { useEffect, useState } from 'react'

import styles from '../styles/cardProduct.module.css'


export default function CardProduct({ item, pagination }) {

  const imgs = [item['Imagen 1'], item['Imagen 2'], item['Imagen 3']]

  const { Nombre: title, Descripcion, Precio, Cantidad, Modelo } = item

  const [imgIdx, setImg] = useState(0)

  const [active, setActive] = useState(true)

  const [modal, setModal] = useState(false)

  const nextImg = () => {
    if (!active) return

    setImg(idx => {
      const i = (idx % imgs.length) + 1
      if (i >= imgs.length) {
        return 0;
      }
      return i;
    })
  }

  const getMsj = ()=>{
    return `https://wa.me/56931204154?text=${encodeURIComponent(`Hola\nEstoy interesado en lo siguiente:\n\n${title}: ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(Precio)}`)}`
  }

  useEffect(() => {
    if (pagination) {
      setInterval(() => {
        nextImg()
      }, 6000)
    }
  }, [])


  const classnames = (idx) => {
    if (imgIdx === idx) return styles.active

    if (imgIdx - 1 === idx) {
      return styles.noActive
    } else if (imgIdx === 0 && idx === imgs.length - 1) {
      return styles.noActive
    }
  }

  const getDataModal = (dict) => {
    let data = []
    for (let property in dict) {
      if (property === 'Imagen 1' || property === 'Imagen 2' || property === 'Imagen 3' || property === 'id' || property === 'path') continue

      if (property === 'Nombre') {
        data.push(<span className={styles.spanNombre}>{dict[property]}</span>)
        continue;
      }

      if (property === 'Dimensiones') {
        data.push(<span >{dict[property]} pixeles</span>)
        continue;
      }

      if (property === 'Descripcion') {
        data.push(<span className={styles.spanDescripcion}>{dict[property]}</span>)
        continue;
      }
      if (property === 'Precio') {
        data.push(<span className={styles.spanPrecio}>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(dict[property])} CLP</span>)
        continue;
      }
      if (property === 'Cantidad') {
        data.push(<span className={styles.spanCantidad}>{dict[property]} unidades</span>)
        continue;
      }
      if (property === 'Modelo') {
        data.push(<span className={styles.spanModelo}>{dict[property]}</span>)
        continue;
      }

      data.push(<span>{dict[property]}</span>)
    }
    return data;
  }


  return (
    <>
      <div className={styles.container}>
        <h3>{title}</h3>
        <div className={styles.Descripcion}>
          <span>{Descripcion}</span>
          <br />
        </div>
        <div className={styles.containerImg}>
          {!pagination && <img src={'/images/loading.gif'} className={styles.active} alt="" />}
          {pagination && imgs.map((it, idx) => <img key={idx} src={`/img-data/${item.path}/${(item.id)}.${it}`} alt="" className={classnames(idx)} />)}
        </div>
        <div className={styles.detalle}>
          <span>Modelo: {Modelo}</span>
          <span>Precio: {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(Precio)}</span>
          <span>Cantidad: {Cantidad}</span>
        </div>
        <button onClick={() => setModal(true)}>Comprar</button>
      </div>
      {modal &&
        <div className={styles.containerModal}>
          <div className={styles.modal}>
            <div>
              <button className={styles.btnCerrar} onClick={() => setModal(false)}>
                <img src="/iconos/x.png" alt="" />
              </button>
            </div>

            <div>
              {getDataModal(item)}
            </div>

            <div>

            </div>
            <a className={styles.btnCompra} href={getMsj()}>

              <img src="/iconos/whatsapp.png" alt="" />
              
              <span>
                Comprar
              </span>

            </a>
          </div>
        </div>
      }
    </>
  )
}
