'use client';
import { useState } from "react";
import Image from "next/image";
import styles from "./components.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderComponent() {
  const [menuVisible, setMenuVisible] = useState(false);

  const navItems = [
    { name: "Resultados e Cases", href: "#", current: true },
    { name: "Negócios Compatíveis", href: "#", current: false },
    { name: "Sobre nós", href: "#", current: false },
    { name: "Clientes", href: "#", current: false },
    { name: "Blog", href: "#", current: false },
  ];

  const navItemsRight = [
    { name: "Acesso ao logista", href: "#", current: false },
    { name: "Consulte seus pontos", href: "#", current: false },
    { name: "Indique e ganhe!", href: "#", current: false },
  ];

  return (
    <header id="header-section" className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={153} height={46} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          {navItems.map((item, index) => (
            <div key={index} className={styles.navItem}>
              <a
                href={item.href}
                className={item.current ? styles.current : styles.link}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.linksRight}>
          {navItemsRight.map((item, index) => (
            <div key={index} className={styles.navItem}>
              <a
                href={item.href}
                className={item.current ? styles.current : styles.link}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.actionsHeader}>
          <div>
            {menuVisible ? (
              <FaTimes className={styles.menuIcon} onClick={() => setMenuVisible(false)} />
            ) : (
              <FaBars className={styles.menuIcon} onClick={() => setMenuVisible(true)} />
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.containerMenu} ${menuVisible ? styles.showMenu : ''}`}>
        <div className={`${styles.mobileMenu} ${menuVisible ? styles.showMenu : ''}`}>
          <div className={styles.closeIcon}>
            <FaTimes onClick={() => setMenuVisible(false)} />
          </div>
          <div className={styles.mobileNavItems}>
            <div>
              {navItemsRight.map((item, index) => (
                <div key={index} className={styles.mobileNavItem}>
                  <a
                    href={item.href}
                    className={item.current ? styles.current : styles.link}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
            <div>
              {navItems.map((item, index) => (
                <div key={index} className={styles.mobileNavItem}>
                  <a
                    href={item.href}
                    className={item.current ? styles.current : styles.link}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
