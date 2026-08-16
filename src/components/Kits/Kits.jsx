import styles from "./Kits.module.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { PiLeaf } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const produtos = [
  {
    nome: "LOLITA CHOCOLATE",
    detalhe: "Chocolate cremoso",
    descricao: "Uma pausa doce para deixar o seu dia ainda melhor.",
    preco: "R$ 8,90",
    imagem: "/lolita-chocolate.png",
  },
  {
    nome: "BOMBOM ESPECIAL",
    detalhe: "Chocolate + recheio",
    descricao: "Pequeno por fora, surpreendente a cada mordida.",
    preco: "R$ 3,50",
    imagem: "/bombom-meio-amargo.png",
  },
  {
    nome: "BRIGADEIRO DOCIM",
    detalhe: "O clássico",
    descricao: "Cremoso, chocolatudo e feito para você querer outro.",
    preco: "R$ 2,80",
    imagem: "/brigadeiro-tradicional.png",
  },
];

const Kits = () => {
  return (
    <section className={styles.section}>

      {/* CABEÇALHO */}
      <div className={styles.cabecalho}>
        <h2>
          <span>KITS</span>
        </h2>

        <NavLink to="/doces" className={styles.verTodos}>
          VER TODOS
          <span>→</span>
        </NavLink>
      </div>

      {/* PRODUTOS */}
      <div className={styles.produtos}>
        {produtos.map((produto, index) => (
          <article className={styles.card} key={index}>

            <div className={styles.imagem}>
              <img
                src={produto.imagem}
                alt={produto.nome}
              />
            </div>

            <div className={styles.informacoes}>
              <h3>{produto.nome}</h3>

              <strong className={styles.detalhe}>
                {produto.detalhe}
              </strong>

              <p>
                {produto.descricao}
              </p>

              <strong className={styles.preco}>
                {produto.preco}
              </strong>

              <button className={styles.botao}>
                EU QUERO
                <IoBagHandleOutline />
              </button>
            </div>

          </article>
        ))}
      </div>

     

    </section>
  );
};

export default Kits;