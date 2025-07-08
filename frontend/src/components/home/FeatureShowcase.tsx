import React from 'react';
import styles from './FeatureShowcase.module.scss';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TrendsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 24L12 16L20 20L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="16" r="2" fill="currentColor"/>
    <circle cx="20" cy="20" r="2" fill="currentColor"/>
    <circle cx="28" cy="8" r="2" fill="currentColor"/>
    <circle cx="4" cy="24" r="2" fill="currentColor"/>
  </svg>
);

const ReviewsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8H24V24H8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 12L28 10L26 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12L4 10L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features: Feature[] = [
  {
    id: 1,
    title: "Trends",
    description: "Trends gathers data from top sources to reveal AI product insights and market trends.",
    icon: <TrendsIcon />
  },
  {
    id: 2,
    title: "Reviews",
    description: "Reviews provide clear product introductions and in-depth, comprehensive evaluations based on hands-on experience.",
    icon: <ReviewsIcon />
  }
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className={styles.featureShowcase}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 