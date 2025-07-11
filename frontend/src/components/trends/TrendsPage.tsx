"use client";

import { useState, useEffect } from 'react';
import styles from './TrendsPage.module.scss';
import TrendChart from './TrendChart';

interface TrendData {
  date: string;
  value: number;
  category: string;
}

interface ChartData {
  productTrends: TrendData[];
  marketTrends: TrendData[];
  userEngagement: TrendData[];
}

const TrendsPage = () => {
  const [chartData, setChartData] = useState<ChartData>({
    productTrends: [],
    marketTrends: [],
    userEngagement: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrendData();
  }, []);

  const fetchTrendData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/trends');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setChartData(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error('Error fetching trend data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading trend data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <p>{error}</p>
          <button onClick={fetchTrendData} className={styles.retryButton}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI Product Trend Analysis</h1>
        <p>Explore the latest AI product market trends and user behavior data</p>
      </div>
      
      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h2>Product Trends</h2>
          <p>Development trends of AI tool products</p>
          <TrendChart 
            data={chartData.productTrends} 
            title="Product Trends"
            color="#8884d8"
          />
        </div>
        
        <div className={styles.chartCard}>
          <h2>Market Growth</h2>
          <p>Overall growth of the AI market</p>
          <TrendChart 
            data={chartData.marketTrends} 
            title="Market Trends"
            color="#82ca9d"
          />
        </div>
        
        <div className={styles.chartCard}>
          <h2>User Engagement</h2>
          <p>User engagement level with AI products</p>
          <TrendChart 
            data={chartData.userEngagement} 
            title="User Engagement"
            color="#ffc658"
          />
        </div>
      </div>
      
      <div className={styles.insights}>
        <h2>Key Insights</h2>
        <div className={styles.insightsGrid}>
          <div className={styles.insight}>
            <h3>📈 Steady Growth</h3>
            <p>The AI product market shows consistent growth trends with rising user demand</p>
          </div>
          <div className={styles.insight}>
            <h3>🎯 User Retention</h3>
            <p>User engagement continues to improve, indicating AI products are becoming part of daily workflows</p>
          </div>
          <div className={styles.insight}>
            <h3>🚀 Innovation Driven</h3>
            <p>New products continue to emerge, driving rapid development across the industry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage; 