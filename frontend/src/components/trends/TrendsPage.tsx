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
      setError('获取数据失败，请稍后重试');
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
          <p>正在加载趋势数据...</p>
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
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI 产品趋势分析</h1>
        <p>探索最新的 AI 产品市场趋势和用户行为数据</p>
      </div>
      
      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h2>产品趋势</h2>
          <p>AI 工具产品的发展趋势</p>
          <TrendChart 
            data={chartData.productTrends} 
            title="产品趋势"
            color="#8884d8"
          />
        </div>
        
        <div className={styles.chartCard}>
          <h2>市场增长</h2>
          <p>AI 市场的整体增长情况</p>
          <TrendChart 
            data={chartData.marketTrends} 
            title="市场趋势"
            color="#82ca9d"
          />
        </div>
        
        <div className={styles.chartCard}>
          <h2>用户参与度</h2>
          <p>用户对 AI 产品的参与程度</p>
          <TrendChart 
            data={chartData.userEngagement} 
            title="用户参与度"
            color="#ffc658"
          />
        </div>
      </div>
      
      <div className={styles.insights}>
        <h2>关键洞察</h2>
        <div className={styles.insightsGrid}>
          <div className={styles.insight}>
            <h3>📈 持续增长</h3>
            <p>AI 产品市场呈现稳定增长趋势，用户需求持续上升</p>
          </div>
          <div className={styles.insight}>
            <h3>🎯 用户粘性</h3>
            <p>用户参与度稳步提升，表明 AI 产品正在成为日常工作的一部分</p>
          </div>
          <div className={styles.insight}>
            <h3>🚀 创新驱动</h3>
            <p>新产品不断涌现，推动整个行业的快速发展</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage; 