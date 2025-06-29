import styles from "./MainHomePage.module.scss";
export default function MainHomePage() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.h1Title}>
        Discover AI Product Trends, Insightful Reviews at Your Fingertips
      </h1>
      <h2 className={styles.h1Description}>
        Track newly launched products worldwide in real-time and get in-depth
        reviews to make smarter decisions. Let Prodlens be your go-to source for
        innovation and market edge!
      </h2>
    </div>
  );
}
