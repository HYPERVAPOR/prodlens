import React from 'react';
import styles from './QASection.module.scss';

interface QAItem {
  id: number;
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    id: 1,
    question: "What is Prodlens?",
    answer: "Prodlens is a platform that tracks the latest AI product information and shares in-depth reviews. It aims to help entrepreneurs understand which products are favored by investors and make informed decisions."
  },
  {
    id: 2,
    question: "Where does the product data come from?",
    answer: "We regularly collect data from various authoritative sources to ensure the data is timely and reliable."
  },
  {
    id: 3,
    question: "How can I contribute?",
    answer: "You can contribute your unique product reviews and feedback using Markdown format. Simply fork our GitHub repository, make your changes, and submit a pull request. After review, we will feature your article on our platform."
  }
];

const QASection: React.FC = () => {
  return (
    <section className={styles.qaSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Learn more about Prodlens
          </p>
        </div>
        
        <div className={styles.qaList}>
          {qaData.map((item) => (
            <div key={item.id} className={styles.qaItem}>
              <input 
                type="checkbox" 
                id={`qa-${item.id}`} 
                className={styles.qaCheckbox}
              />
              <label 
                htmlFor={`qa-${item.id}`} 
                className={styles.questionButton}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.arrow}>+</span>
              </label>
              
              <div className={styles.answerContainer}>
                <div className={styles.answer}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection; 