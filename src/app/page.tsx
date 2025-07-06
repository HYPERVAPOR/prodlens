import NavBar from "@/components/NavBar";
import MainHomePage from "@/components/MainHomePage";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div>
      <NavBar />
      <MainHomePage />
      <Footer />
    </div>
  );
}
