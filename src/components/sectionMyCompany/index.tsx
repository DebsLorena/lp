'use client';
import Image from "next/image";
import styles from "./components.module.css";

export default function SectionMyCompanyComponent() {
  return (
    <>
      <section id="section-my-company" className={styles.myCompany}>
        <div className={styles.containerMyCompany}>
          <h2>O Garçom Web serve para minha empresa?</h2>
          <h3>Empresas com alguma dessas características tem maior sucesso com o  Garçom Web</h3>
        </div>
        <div className={styles.cardsCompany}>
          <div className={styles.cardCompany}>
            <Image src="/estabelecimento.svg" alt="icon" width={60} height={70} />
            <p>Negócio local ou Rede de franquia</p>
          </div>
          <div className={styles.cardCompany}>
            <Image src="/clientes.svg" alt="icon" width={60} height={70} />
            <p>Já possui muitos clientes fidelizados</p>
          </div>
          <div className={styles.cardCompany}>
            <Image src="sacola.svg" alt="icon" width={60} height={70} />
            <p>Busca inovação e quer a melhor experiência do cliente</p>
          </div>
          <div className={styles.cardCompany}>
            <Image src="/estrela.svg" alt="icon" width={60} height={70} />
            <p>Acredita que negócios guiados por dados são o futuro</p>
          </div>

        </div>

        <div className={styles.containerButtonsResults}>
          <button className={styles.buttonsResults}>FALE COM UM CONSULTOR</button>
          <button className={styles.buttonsResults}>VER APRESENTAÇÃO NO WHATSAPP</button>
        </div>
      </section>
    </>
  );
}
