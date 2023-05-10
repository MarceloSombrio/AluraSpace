import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../galeria/fotos.json'

export default function  Tags({tags, filtrafotos, setItens }) {
  return (
    <div className={styles.tags}>
        <p>Busque por tags:</p>
        <ul className={styles.tags__lista}>
          {tags.map((tag) => {
            return(
            <li key={tag} onClick={() => filtrafotos(tag)}>{tag}</li>
            )
          })}
          <li onClick={() => setItens(fotos)}> Todas</li>
        </ul>
    </div>
  )
}
