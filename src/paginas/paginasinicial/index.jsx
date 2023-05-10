import Cabecalho from "../../componentes/cabecalho"
import Menu from "../../componentes/Menu"
import Populares from "../../componentes/populares"
import Galeria from "../../componentes/galeria"
import Rodape from "../../rodape"
import banner from './banner.png'
import styles from './paginainicial.module.scss'


export default function Paginainicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A Galeria mais completa do espaço</h1>
                        <img src={banner} alt="a imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                <Galeria/>
                <Populares/>
            </div>
            </main>
            <Rodape/>
        </>
    )
}