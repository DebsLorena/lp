import styles from "./page.module.css";
import HeaderComponent from "../components/header";
import SliderComponent from "../components/slider";
import SectionVideoComponent from "@/components/sectionVideo";
import SectionEstablishmentsComponent from "@/components/sectionEstablishments";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent />
      <div className={styles.sliders}>
        <SliderComponent />
        <SectionVideoComponent />
        <SectionEstablishmentsComponent />
      </div>

    </main>
  );
}
