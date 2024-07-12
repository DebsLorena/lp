import styles from "./page.module.css";
import HeaderComponent from "../components/header";
import SliderComponent from "../components/slider";
import VideoComponent from "@/components/video";
import ResultsComponent from "@/components/results";
import AboutComponent from "@/components/about";
import EstablishmentsComponent from "@/components/establishments";
import BannerComponent from "@/components/banner";
import CompanyComponent from "@/components/company";
import FooterComponent from "@/components/footer";
import WhatsAppIcont from "@/components/whatsapp";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.divHeader}>
        <HeaderComponent />
      </div>
      <div className={styles.sliders}>
        <SliderComponent />
        <VideoComponent />
        <EstablishmentsComponent />
      </div>
      <BannerComponent />
      <ResultsComponent />
      <CompanyComponent />
      <AboutComponent />
      <FooterComponent />
      <WhatsAppIcont />
    </main>
  );
}
