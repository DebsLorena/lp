'use client';
import Image from "next/image";
import styles from "./components.module.css";

export default function BannerComponent() {
  return (
    <section id="banner" className={styles.banner}>
      <div className={styles.textBanner}>
        <h2 className={styles.titleBanner}>Empresas como Apple, Amazon, Google, Harley Davidson, Starbucks, iFood, Rappi, Uber,
          Nubank e WhatsApp não possuem clientes, mas sim <strong> verdadeiros fãs </strong>.</h2>
        <h3 className={styles.subTitleBanner}>Economizam milhões em publicidade por causa dos seus clientes fidelizados.</h3>
      </div>
    </section>
  );
}
