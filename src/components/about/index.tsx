'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./components.module.css";

export default function AboutComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        }
      },
    ]
  };

  return (
    <>
      <section id="section-my-company" className={styles.about}>
        <div className={styles.containerAbout}>
          <div className={styles.aboutText}>
            <h2>Sobre nós</h2>
            <p>A Garçom Web é uma empresa de Automação Comercial</p>
            <p>Integradora de solução para o comércio no geral. Com profissionais experientes na área de Automação Comercial, em 2002 nasceu a Garçom Web. Uma empresa inovadora que busca soluções especiais para seus clientes, e conta com uma equipe especializada sempre pronta para atendê-los.</p>
            <h3>“Ser reconhecido como o melhor Sistema, para o setor da Automação Comercial, pelos operadores: Garçons, Gerentes e Gestores da nossa área de atuação e por todos que trabalham na Garçom Web.”</h3>
            <span>João Soares - CEO Garçom Web</span>
          </div>
          <div className={styles.aboutImage}>
            <Image src="/sobre.png" alt="about" width={250} height={250} />
          </div>
        </div>
        <div className={styles.titleCards}>
          <p>Valores</p>
        </div>
        <Slider {...settings} className={styles.cardsCompany}>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Honestidade</h3>
              <p>A Garçom Web é regida pela verdade e transparência em seus atos e declarações, de forma que se estabeleça uma relação de confiança com seus funcionários, clientes e parceiros.</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Qualidade</h3>
              <p>Buscar sempre as melhores e mais seguras práticas em sistema e gestão.</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Justiça</h3>
              <p>A Garçom Web preza pela igualdade, respeita os direitos dos seus funcionários e atua de forma responsável junto a seus clientes e parceiros.</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Respeito</h3>
              <p>Todos que trabalham na Garçom Web respeitam o próximo, independente de crença, raça, sexo, posição social, idade, cultura e condição econômico-financeira.</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Diligência</h3>
              <p>Zelar e executar com cuidado todas as tarefas.</p>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.cardCompany}>
              <h3>Competência</h3>
              <p>A Garçom Web investe na capacitação e promove a disseminação do conhecimento, desenvolvendo em seus profissionais habilidades e atitudes que resultem em uma atuação diferenciada.</p>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
