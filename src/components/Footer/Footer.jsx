import styles from "./Footer.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.onda}></div>

      <div className={styles.footerContent}>
        
        {/* MARCA */}
        <div className={styles.brandInfo}>
          <img
            src="/logoFooter.png"
            alt="Docim"
            className={styles.logo}
          />

          <p>
            Doces feitos para momentos que 
            <br />
            merecem ser lembrados.
          </p>
        </div>


        {/* CONTATO */}
        <div className={styles.contato}>
          <h3>FALE CONOSCO</h3>

          <a href="https://wa.me/5581995735689">
            <FaWhatsapp />
            <span>(81) 99573-5689</span>
          </a>

          <a
            href="https://www.instagram.com/_.docim"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            <span>@_.docim</span>
          </a>

        </div>

      </div>

      <div className={styles.copyRight}>
        <p>
          © {anoAtual} Docim. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;