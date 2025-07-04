import styles from "./LogoCarousel.module.scss";

export default function LogoCarousel() {
  // 链接管理对象
  const logoLinks = {
    cursor: "https://cursor.sh/",
    dify: "https://dify.ai/",
    monica: "https://monica.im/",
    n8n: "https://n8n.io/",
    ragflow: "https://ragflow.io/"
  };

  const logos = [
    { src: "/ProdLogos/cursorLogo.png", alt: "Cursor", key: "cursor" },
    { src: "/ProdLogos/difyLogo.png", alt: "Dify", key: "dify" },
    { src: "/ProdLogos/monicaLogo.png", alt: "Monica", key: "monica" },
    { src: "/ProdLogos/n8nLogo.png", alt: "n8n", key: "n8n" },
    { src: "/ProdLogos/ragflowLogo.png", alt: "Ragflow", key: "ragflow" },
  ];

  return (
    <div className={styles.logoCarousel}>
      <div className={styles.carouselTrack}>
        {/* 第一组logo */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className={styles.logoItem}>
            <a 
              href={logoLinks[logo.key as keyof typeof logoLinks]} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={styles.logoImage}
              />
            </a>
          </div>
        ))}
        {/* 第二组logo（用于无缝循环） */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className={styles.logoItem}>
            <a 
              href={logoLinks[logo.key as keyof typeof logoLinks]} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={styles.logoImage}
              />
            </a>
          </div>
        ))}
      </div>
      <p className={styles.logoCarouselDescription}>Comprehensive Research and Evaluation of AI Products Worldwide</p>
    </div>
  );
}