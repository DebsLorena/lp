'use client';
import Image from "next/image";
import styles from "./components.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderComponent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="section-slider" className={styles.sectionSlider}>
      <div className={styles.textSlider}>
        <div>
          <h1 className={styles.titleSlider}>Usamos o Marketing de Fidelização para sua loja ter clientes fiéis que voltam sempre e compram mais.</h1>
          <h3 className={styles.subTitleSlider}>Ao contrário do que se pensa, a fidelização não ocorre de forma natural, mas mudamos isso moldando os hábitos dos seus clientes com dados, estímulos e tecnologia.</h3>
        </div>
        <div className={styles.containerButtonSlider}>
          <button className={styles.buttonFirstSlider}>Fale com um consultor</button>
          <button className={styles.buttonSecondSlider}>Ver apresentação no whatsapp</button>
        </div>
      </div>
      <div className={styles.carrossel}>
        <Slider {...settings} className={styles.imagensCarrossel}>
          <div className={styles.imageContainer}>
            <Image src="/1.jpg" alt="carrossel" layout="responsive" width={400} height={376} className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/2.jpg" alt="carrossel" layout="responsive" width={400} height={376} className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/3.jpg" alt="carrossel" layout="responsive" width={400} height={376} className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/4.jpg" alt="carrossel" layout="responsive" width={400} height={376} className={styles.image} />
          </div>
          <div className={styles.imageContainer}>
            <Image src="/5.jpg" alt="carrossel" layout="responsive" width={400} height={376} className={styles.image} />
          </div>
        </Slider>
      </div>
    </section>
  );
}
