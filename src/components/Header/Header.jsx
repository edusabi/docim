import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  const menuRef = useRef(null);
  const linkRefs = useRef([]);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const links = [
    { nome: "INÍCIO", path: "/" },
    { nome: "DOCES", path: "/doces" },
    { nome: "KITS", path: "/kits" },
    { nome: "SOBRE NÓS", path: "/sobre" },
  ];

  useEffect(() => {
    const activeIndex = links.findIndex(
      (link) => link.path === location.pathname
    );

    const activeLink = linkRefs.current[activeIndex];
    const menu = menuRef.current;

    if (activeLink && menu) {
      const linkRect = activeLink.getBoundingClientRect();
      const menuRect = menu.getBoundingClientRect();

      setIndicator({
        left: linkRect.left - menuRect.left,
        width: linkRect.width,
      });
    }
  }, [location.pathname]);

  return (
    <div className={styles.header}>
      <img src="/logoHeader.png" alt="Docim" width="140px" />

      <div className={styles.menu} ref={menuRef}>
        {links.map((link, index) => (
          <NavLink
            key={link.path}
            to={link.path}
            ref={(el) => (linkRefs.current[index] = el)}
          >
            {link.nome}
          </NavLink>
        ))}

        <span
          className={styles.indicator}
          style={{
            left: `${indicator.left}px`,
            width: `${indicator.width}px`,
          }}
        />
      </div>

      <span className={styles.pedir}>
        <img src="/zap.png" alt="WhatsApp" />
        <a href="#">PEDIR AGORA</a>
      </span>
    </div>
  );
};

export default Header;