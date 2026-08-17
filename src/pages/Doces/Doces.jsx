import { useEffect, useMemo, useState } from "react";
import styles from "./Doces.module.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";


const NUMERO_WHATSAPP = "5581995735689";
const CHAVE_CARRINHO = "docim_cart";

const produtos = [
  {
    id: "bombom-meio-amargo",
    nome: "Bombom Meio Amargo",
    preco: 3.5,
    imagem: "/doces/bombom-meio-amargo.jpg",
  },
  {
    id: "brigadeiro-tradicional",
    nome: "Brigadeiro Tradicional",
    preco: 2.8,
    imagem: "/doces/brigadeiro-tradicional.jpg",
  },
  {
    id: "lolita-ninho-nutella",
    nome: "Lolita de Ninho com Nutella",
    preco: 9.5,
    imagem: "/doces/lolita-ninho-nutella.jpg",
  },
  {
    id: "bombom-morango",
    nome: "Bombom de Morango",
    preco: 3.8,
    imagem: "/doces/bombom-morango.jpg",
  },
  {
    id: "brigadeiro-branco",
    nome: "Brigadeiro Branco",
    preco: 3.2,
    imagem: "/doces/brigadeiro-branco.jpg",
  },
  {
    id: "lolita-oreo",
    nome: "Lolita de Oreo",
    preco: 8.5,
    imagem: "/doces/lolita-oreo.jpg",
  },
  {
    id: "bombom-ninho",
    nome: "Bombom de Ninho",
    preco: 3.8,
    imagem: "/doces/bombom-ninho.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
  {
    id: "brigadeiro-churros",
    nome: "Brigadeiro de Churros",
    preco: 3.5,
    imagem: "/doces/brigadeiro-churros.jpg",
  },
];

const formatarPreco = (valor) =>
  Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const Doces = () => {
  const [carrinho, setCarrinho] = useState(() => {
    try {
      const carrinhoSalvo = localStorage.getItem(CHAVE_CARRINHO);
      return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    } catch {
      return [];
    }
  });

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(carrinho));
  }, [carrinho]);

  useEffect(() => {
    document.body.style.overflow = carrinhoAberto ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [carrinhoAberto]);

  const totalItens = useMemo(
    () => carrinho.reduce((total, item) => total + item.quantidade, 0),
    [carrinho]
  );

  const valorTotal = useMemo(
    () =>
      carrinho.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0
      ),
    [carrinho]
  );

  const mostrarAviso = (texto) => {
    setAviso(texto);
    window.setTimeout(() => setAviso(""), 2200);
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((carrinhoAtual) => {
      const produtoJaExiste = carrinhoAtual.find(
        (item) => item.id === produto.id
      );

      if (produtoJaExiste) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...carrinhoAtual, { ...produto, quantidade: 1 }];
    });

    mostrarAviso(`${produto.nome} foi adicionado ao carrinho!`);
  };

  const alterarQuantidade = (produtoId, valor) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === produtoId
          ? { ...item, quantidade: Math.max(1, item.quantidade + valor) }
          : item
      )
    );
  };

  const removerDoCarrinho = (produtoId) => {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.id !== produtoId)
    );
  };

  const finalizarNoWhatsApp = () => {
  if (totalItens < 1) {
    mostrarAviso("Adicione pelo menos 1 doce ao carrinho.");
    return;
  }

  const itensDoPedido = carrinho
    .map((item, index) => {
      const subtotal = item.preco * item.quantidade;

      return (
        `${index + 1}. *${item.nome}*\n` +
        `Quantidade: ${item.quantidade}\n` +
        `Subtotal: ${formatarPreco(subtotal)}`
      );
    })
    .join("\n\n");

  // Não coloque emojis diretamente nesta mensagem.
  const mensagem =
    `Oi, Docim! CORACAO_DOCIM Quero fazer meu pedido:\n\n` +
    `${itensDoPedido}\n\n` +
    `*Total de doces:* ${totalItens}\n` +
    `*Valor total:* ${formatarPreco(valorTotal)}\n\n` +
    `Pode confirmar a disponibilidade para mim? CHOCOLATE_DOCIM`;

  // Primeiro codifica o texto normal.
  let mensagemCodificada = encodeURIComponent(mensagem);

  // Depois insere os emojis já codificados diretamente na URL.
  mensagemCodificada = mensagemCodificada
  .replace("CORACAO_DOCIM", "%F0%9F%A7%A1")
  .replace("CHOCOLATE_DOCIM", "%F0%9F%8D%AB");

  const numeroWhatsApp = "5581995735689";

  const linkWhatsApp =
    `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`;

  window.location.href = linkWhatsApp;
};

  return (
    <main className={styles.pagina}>
      {aviso && <div className={styles.aviso}>{aviso}</div>}

      <section className={styles.apresentacao}>
        <span>FEITOS PARA ADOÇAR SEU DIA</span>
        <h1>Nossos doces</h1>
        <p>Escolha seus favoritos e monte o pedido do seu jeito.</p>
      </section>

      <section className={styles.catalogo} aria-labelledby="titulo-catalogo">
        <div className={styles.tituloCatalogo}>
          <h2 id="titulo-catalogo">
            TODOS OS <strong>DOCES</strong>
          </h2>
        </div>

        <div className={styles.grade}>
          {produtos.map((produto) => (
            <article className={styles.card} key={produto.id}>
              <div className={styles.caixaImagem}>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  loading="lazy"
                  onError={(evento) => {
                    evento.currentTarget.onerror = null;
                    evento.currentTarget.src = "/logoHeader.png";
                    evento.currentTarget.classList.add(styles.imagemAlternativa);
                  }}
                />
              </div>

              <div className={styles.conteudoCard}>
                <h3>{produto.nome}</h3>
                <strong className={styles.preco}>
                  {formatarPreco(produto.preco)}
                </strong>

                <button
                  type="button"
                  className={styles.botaoAdicionar}
                  onClick={() => adicionarAoCarrinho(produto)}
                >
                  EU QUERO <span aria-hidden="true"><IoBagHandleOutline /></span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <button
        type="button"
        className={styles.botaoCarrinho}
        onClick={() => setCarrinhoAberto(true)}
        aria-label={`Abrir carrinho com ${totalItens} itens`}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M6 7h15l-2 8H8L6 3H3" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>

        {totalItens > 0 && (
          <span className={styles.quantidadeCarrinho}>{totalItens}</span>
        )}
      </button>

      {carrinhoAberto && (
        <div
          className={styles.fundoCarrinho}
          onClick={() => setCarrinhoAberto(false)}
        >
          <aside
            className={styles.carrinho}
            onClick={(evento) => evento.stopPropagation()}
            aria-label="Carrinho de compras"
          >
            <div className={styles.cabecalhoCarrinho}>
              <div>
                <span>SEU PEDIDO</span>
                <h2>Carrinho</h2>
              </div>

              <span
                type="button"
                onClick={() => setCarrinhoAberto(false)}
                aria-label="Fechar carrinho"
              >
                <MdKeyboardArrowRight/>
              </span>
            </div>

            <div className={styles.itensCarrinho}>
              {carrinho.length === 0 ? (
                <div className={styles.carrinhoVazio}>
                  <span aria-hidden="true">🍫</span>
                  <p>Seu carrinho ainda está vazio.</p>
                  <small>Escolha pelo menos um doce para continuar.</small>
                </div>
              ) : (
                carrinho.map((item) => (
                  <article className={styles.itemCarrinho} key={item.id}>
                    <img
                      src={item.imagem}
                      alt=""
                      onError={(evento) => {
                        evento.currentTarget.onerror = null;
                        evento.currentTarget.src = "/logoHeader.png";
                      }}
                    />

                    <div className={styles.dadosItem}>
                      <h3>{item.nome}</h3>
                      <strong>
                        {formatarPreco(item.preco * item.quantidade)}
                      </strong>

                      <div className={styles.acoesItem}>
                        <div className={styles.controleQuantidade}>
                          <button
                            type="button"
                            onClick={() => alterarQuantidade(item.id, -1)}
                            aria-label={`Diminuir quantidade de ${item.nome}`}
                          >
                            −
                          </button>
                          <span>{item.quantidade}</span>
                          <button
                            type="button"
                            onClick={() => alterarQuantidade(item.id, 1)}
                            aria-label={`Aumentar quantidade de ${item.nome}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className={styles.remover}
                          onClick={() => removerDoCarrinho(item.id)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {carrinho.length > 0 && (
              <footer className={styles.rodapeCarrinho}>
                <div className={styles.resumo}>
                  <span>
                    {totalItens} {totalItens === 1 ? "doce" : "doces"}
                  </span>
                  <strong>{formatarPreco(valorTotal)}</strong>
                </div>

                <button
                  type="button"
                  className={styles.finalizar}
                  onClick={finalizarNoWhatsApp}
                >
                  FINALIZAR NO WHATSAPP
                </button>

                <small>Pedido mínimo: 1 unidade</small>
              </footer>
            )}
          </aside>
        </div>
      )}
    </main>
  );
};

export default Doces;