import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import Categorias from "../../components/MaisVendidos/MaisVendidos";
import Kits from "../../components/Kits/Kits";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

import { MdArrowRightAlt } from "react-icons/md";

const Home = () => {
  
  return (
    <div>
      
       <section className={styles.hero}>

      <div className={styles.conteudo}>

        <div className={styles.textos}>
          <h1>
            Um{" "}
            <img
              src="/logoHome.png" width="150px"
              className={styles.logoTexto}
              alt="Docim"
            />
            <br />

            deixa tudo
            <br />

            melhor.
          </h1>

          <p>
            Lolitas, bombons, brigadeiros e muito
            <br />
            mais para adoçar seus melhores momentos.
          </p>

          <NavLink to="/doces" className={styles.botao}>
            CONHEÇA NOSSOS DOCES
            <span><MdArrowRightAlt/></span>
          </NavLink>
        </div>

        <div className={styles.imagem}>
          <img
            src="/hero-docim.png"
            alt="Doces Docim"
          />
        </div>

      </div>

    </section>

    <Categorias/>


    <div className={styles.cardFrase}>

      <div className={styles.cardFraseTexto}>
        <h2>
          Você também
          <br />
          merece um
          <br />
          <span>docim</span> hoje.
        </h2>

        <div className={styles.linhaFrase}></div>

        <p>
          Pequenos momentos,
          <br />
          grandes prazeres.
        </p>
      </div>

      <div className={styles.cardFraseImagem}>
        <img
          src="/brigadeiros-frase.png"
          alt="Brigadeiros Docim"
        />
      </div>

      <div className={styles.decoracaoCard}></div>

    </div>

    <Kits/>
    
    <Footer/>

    </div>
  )
}

export default Home