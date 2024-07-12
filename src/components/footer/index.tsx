'use client';

import Image from "next/image";
import styles from "./components.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function FooterComponent() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerDiv}>
          <Image src="/logo.png" alt="logo" width={179} height={54} />
          <h3 style={{ margin: "20px 0" }}>O futuro já chegou!.</h3>  <h3 style={{ margin: "20px 0" }}>
            Escolha o Garçom Web e faça
            parte dessa nova era.</h3>
          <Image src="/stone.png" alt="logoStone" width={167} height={80} />
        </div>
        <div className={styles.footerDiv}>
          <h3>Área de Atuação</h3>
          <ul>
            <li>Pizzaria</li>
            <li>Churrascaria</li>
            <li>Sorveteria</li>
            <li>Bar</li>
            <li>Galeteria</li>
            <li>Hamburgueria</li>
          </ul>
        </div>
        <div className={styles.footerDiv}>
          <h3>Estados</h3>
          <ul>
            <li>São Paulo</li>
            <li>Rio de Janeiro</li>
            <li>Minas Gerais</li>
            <li>Brasília</li>
            <li>Goiás</li>
            <li>Paraná</li>
            <li>Rio Grande do Sul</li>
          </ul>
        </div>
        <div className={styles.footerDiv} >
          <h3>Contatos</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <FaEnvelope style={{ marginRight: '8px' }} />
              Email: contato@garcomweb.com.br
            </li>
            <li>
              <FaPhone style={{ marginRight: '8px' }} />
              Telefone: +55 11 3082-8660
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: '8px' }} />
              Endereço: Rua Cônego Eugênio Leite, 433. Pinheiros, São Paulo - SP
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
