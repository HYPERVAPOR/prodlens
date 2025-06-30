import styles from "./MainHomePage.module.scss";
import MainButtonWrapper from "./MainButtonWrapper";
import LogoCarousel from "./LogoCarousel";
export default function MainHomePage() {
  return (
    <div>
      <h1 className={styles.h1Title}>
        Discover AI Product <span style={{ color: '#C71585' }}>Trends</span>, <br />Insightful <span style={{ color: '#C71585' }}>Reviews</span> at Your Fingertips
      </h1>
      <h2 className={styles.h1Description}>
        Track newly launched products worldwide in real-time and get in-depth
        reviews to make smarter decisions.
      </h2>
      <MainButtonWrapper/>
      <LogoCarousel/>
    </div>
  );
}
