import styles from "./page.module.css";
import HeaderComponent from "../components/header";
import SliderComponent from "../components/slider";
import SectionVideoComponent from "@/components/sectionVideo";
import SectionEstablishmentsComponent from "@/components/sectionEstablishments";
import SectionBannerComponent from "@/components/sectionBanner";
import SectionResultsComponent from "@/components/sectionResults";
import SectionMyCompanyComponent from "@/components/sectionMyCompany";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent />
      <div className={styles.sliders}>
        <SliderComponent />
        <SectionVideoComponent />
        <SectionEstablishmentsComponent />
      </div>
      <SectionBannerComponent />
      <SectionResultsComponent />
      <SectionMyCompanyComponent />
    </main>
  );
}
