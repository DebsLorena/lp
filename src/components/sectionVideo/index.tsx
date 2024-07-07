'use client';
import Image from "next/image";
import styles from "./components.module.css";
import Modal from "react-modal";
import { IoPlayOutline } from "react-icons/io5";
import { useState } from "react";



export default function SectionVideoComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className={styles.sectionVideo}>
      <div className={styles.sectionVideoImage}>
        <Image src="/gw-office.png" alt="slider" width={600} height={354} />
        <button className={styles.buttonSectionVideo} onClick={openModal}>
          <IoPlayOutline className={styles.iconSectionVideo} />
        </button>
      </div>
      <div className={styles.textSlider}>
        <div>
          <h1 className={styles.titleSlider}>Garçon Web, servindo resultados!</h1>
          <h3 className={styles.subTitleSlider}>Não importa quão grande ou pequeno seja o seu empreendimento. Nós temos a Solução certa para a gestão do seu negócio.</h3>
        </div>
        <div className={styles.containerButtonSlider}>
          <button className={styles.buttonFirstSlider}>Fale com um consultor</button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo do YouTube"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button className={styles.closeButton} onClick={closeModal}>X</button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tl3RjjQUzMU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
}
