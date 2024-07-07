'use client';
import Image from "next/image";
import styles from "./components.module.css";



export default function SectionEstablishmentsComponent() {


  return (
    <section id="section-slider" className={styles.establishments}>
      <div className={styles.textSlider}>
        <div>
          <h2 className={styles.titleSlider}>Já são milhares de estabelecimentos parceiros confiando e tendo sucesso com o Fidelizi</h2>
          <h3 className={styles.subTitleSlider}>Junte-se ao ecossistema de negócios locais que prosperam todo mês.</h3>
        </div>
      </div>

    </section>
  );
}
