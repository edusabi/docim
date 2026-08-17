import { useEffect, useRef, useState } from "react";
import styles from "./MaisVendidos.module.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const produtos = [
  {
    nome: "Lolita Chocolate",
    preco: "R$ 8,90",
    imagem: "/lolita-chocolate.png",
  },
  {
    nome: "Bombom Meio Amargo",
    preco: "R$ 3,50",
    imagem: "/bombom-meio-amargo.png",
  },
  {
    nome: "Brigadeiro Tradicional",
    preco: "R$ 2,80",
    imagem: "/brigadeiro-tradicional.png",
  },
  {
    nome: "Lolita Ninho com Nutella",
    preco: "R$ 9,50",
    imagem: "/lolita-ninho.png",
  },
  {
    nome: "Bombom de Morango",
    preco: "R$ 3,80",
    imagem: "/bombom-morango.png",
  },
  {
    nome: "Brigadeiro Branco",
    preco: "R$ 3,20",
    imagem: "/brigadeiro-branco.png",
  },
];

const GAP = 18;

const MaisVendidos = () => {
  const totalProdutos = produtos.length;

  const [cardsVisiveis, setCardsVisiveis] = useState(5);

  const [indice, setIndice] = useState(totalProdutos);

  const [usarTransicao, setUsarTransicao] = useState(true);

  const [movendo, setMovendo] = useState(false);

  const [pausado, setPausado] = useState(false);

  const intervaloRef = useRef(null);

  const produtosLoop = [
    ...produtos,
    ...produtos,
    ...produtos,
  ];

  /* =========================
     RESPONSIVIDADE
  ========================= */

  useEffect(() => {
    const atualizarCards = () => {
      let quantidade = 5;

      if (window.innerWidth <= 550) {
        quantidade = 1;
      } else if (window.innerWidth <= 800) {
        quantidade = 2;
      } else if (window.innerWidth <= 1100) {
        quantidade = 3;
      } else if (window.innerWidth <= 1450) {
        quantidade = 4;
      }

      setCardsVisiveis(quantidade);

      setUsarTransicao(false);
      setMovendo(false);
      setIndice(totalProdutos);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setUsarTransicao(true);
        });
      });
    };

    atualizarCards();

    window.addEventListener("resize", atualizarCards);

    return () => {
      window.removeEventListener("resize", atualizarCards);
    };
  }, [totalProdutos]);

  /* =========================
     PRÓXIMO
  ========================= */

  const proximo = () => {
    if (movendo) return;

    setMovendo(true);
    setUsarTransicao(true);

    setIndice((prev) => prev + 1);
  };

  /* =========================
     ANTERIOR
  ========================= */

  const anterior = () => {
    if (movendo) return;

    setMovendo(true);
    setUsarTransicao(true);

    setIndice((prev) => prev - 1);
  };

  /* =========================
     FINAL DA ANIMAÇÃO
  ========================= */

  const finalizarAnimacao = () => {
    if (indice >= totalProdutos * 2) {
      setUsarTransicao(false);

      setIndice((prev) => prev - totalProdutos);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setUsarTransicao(true);
          setMovendo(false);
        });
      });

      return;
    }

    if (indice < totalProdutos) {
      setUsarTransicao(false);

      setIndice((prev) => prev + totalProdutos);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setUsarTransicao(true);
          setMovendo(false);
        });
      });

      return;
    }

    setMovendo(false);
  };

  /* =========================
     AUTOPLAY
  ========================= */

  useEffect(() => {
    if (pausado) {
      return;
    }

    intervaloRef.current = setInterval(() => {
      if (!movendo) {
        setMovendo(true);
        setUsarTransicao(true);

        setIndice((prev) => prev + 1);
      }
    }, 3500);

    return () => {
      clearInterval(intervaloRef.current);
    };
  }, [movendo, pausado]);

  return (
    <section className={styles.section}>
      {/* =========================
          CABEÇALHO
      ========================= */}

      <div className={styles.cabecalho}>
        <div className={styles.titulo}>
          <h2>
            MAIS <span>VENDIDOS</span>
          </h2>

        </div>

        <NavLink
          to="/doces"
          className={styles.verTodos}
        >
          VER TODOS

          <span>→</span>
        </NavLink>
      </div>

      {/* =========================
          CARROSSEL
      ========================= */}

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.controle} ${styles.anterior}`}
          onClick={anterior}
          aria-label="Produto anterior"
        >
          <span>‹</span>
        </button>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <div
            className={styles.track}
            onTransitionEnd={finalizarAnimacao}
            style={{
              transform: `
                translateX(
                  calc(
                    -${indice} *
                    (
                      (100% - ${(cardsVisiveis - 1) * GAP}px)
                      / ${cardsVisiveis}
                      + ${GAP}px
                    )
                  )
                )
              `,

              transition: usarTransicao
                ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
          >
            {produtosLoop.map((produto, index) => (
              <article
                className={styles.card}
                key={`${produto.nome}-${index}`}
                style={{
                  flexBasis: `
                    calc(
                      (100% - ${(cardsVisiveis - 1) * GAP}px)
                      / ${cardsVisiveis}
                    )
                  `,
                }}
              >
                <div className={styles.areaImagem}>
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                  />
                </div>

                <div className={styles.informacoes}>
                  <h3>
                    {produto.nome}
                  </h3>

                  <strong>
                    {produto.preco}
                  </strong>

                  <button
                    className={styles.euQuero}
                  >
                    <span>
                      EU QUERO
                    </span>

                    <span
                      className={styles.sacola}
                    >
                      <IoBagHandleOutline/> 
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className={`${styles.controle} ${styles.proximo}`}
          onClick={proximo}
          aria-label="Próximo produto"
        >
          <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default MaisVendidos;