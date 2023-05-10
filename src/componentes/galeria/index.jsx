import React, { useState } from 'react'
import Tags from '../tags'
import styles from './Galeria.module.scss'
import Cards from './cards'
import fotos from "./fotos.json"

export default function Galeria() {
 const [itens, setItens] = useState(fotos);
 const tags = [...new Set(fotos.map((valor) => valor.tag))]

 const filtrafotos = (tag) => {
  const novasfotos = fotos.filter((foto) => {
    return foto.tag === tag;
  });

  setItens(novasfotos);
 }

  return (
    <section className={styles.galeria}>
        <h2>
            Navegue pela galeria
        </h2>
        <Tags tags={tags} filtrafotos={filtrafotos} setItens={setItens}/>
        <Cards itens={itens} styles={styles}/>
    </section>
  )
}
