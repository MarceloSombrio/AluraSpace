import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {fotosPopulares.map((fotopopular) => {
                return (
                    <li key={fotopopular.id}>
                        <img src={fotopopular.path} alt={fotopopular.alt} />
                    </li>
                )
            })}   
        </ul>
        <button> Ver Mais Fotos</button>
    </aside>
  )
}
