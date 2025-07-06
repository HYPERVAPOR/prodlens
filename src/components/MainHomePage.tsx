import styles from "./MainHomePage.module.scss";
import MainButtonWrapper from "./MainButtonWrapper";
import LogoCarousel from "./LogoCarousel";
import FeatureShowcase from "./FeatureShowcase";
import QASection from "./QASection";

export default function MainHomePage() {
  return (
    <div>
      <h1 className={styles.h1Title}>
        Discover AI Product <span className={styles.highlightText}>Trends</span>, <br />Insightful <span className={styles.highlightText}>Reviews</span> at Your Fingertips
      </h1>
      <h2 className={styles.h1Description}>
        Track newly launched products worldwide in real-time and get in-depth
        reviews to make smarter decisions
      </h2>
      <MainButtonWrapper/>
      <LogoCarousel/>
      <FeatureShowcase/>
      <QASection/>
    </div>
  );
}
