'use client';
import Image from "next/image";
import styles from "./components.module.css";

export default function EstablishmentsComponent() {
  return (
    <section id="establishments" className={styles.establishments}>
      <div className={styles.textSlider}>
        <div>
          <h2 className={styles.titleSlider}>Já são milhares de estabelecimentos parceiros confiando e tendo sucesso com o Garçon Web.</h2>
          <h3 className={styles.subTitleSlider}>Junte-se ao ecossistema de negócios locais que prosperam todo mês.</h3>
        </div>
      </div>
      <div className={styles.establishmentsImage}>
        <div className={styles.imageContainer}>
          <div className={styles.beforeImage}>
            <Image src="/img-1.png" alt="client" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.afterImage}>
            <Image src="/img-1.png" alt="client" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.beforeImage}>
            <Image src="/img-2.png" alt="client" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.afterImage}>
            <Image src="/img-2.png" alt="client" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.beforeImage}>
            <Image src="/img-3.png" alt="client" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.afterImage}>
            <Image src="/img-3.png" alt="client" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.beforeImage}>
            <Image src="/img-4.png" alt="client" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.afterImage}>
            <Image src="/img-4.png" alt="client" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.beforeImage}>
            <Image src="/img-5.png" alt="client" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.afterImage}>
            <Image src="/img-5.png" alt="client" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
