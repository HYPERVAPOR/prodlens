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

// Define tab types
type TabType = 'visits' | 'community' | 'finance';

const TrendsPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('visits');
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

  // Tab configuration
  const tabs = [
    { id: 'visits' as TabType, label: 'Traffic', icon: '📊' },
    { id: 'community' as TabType, label: 'Community', icon: '👥' },
    { id: 'finance' as TabType, label: 'Finance', icon: '💰' }
  ];

  // Render different content based on current tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'visits':
        return (
          <div className={styles.tabContent}>
            <div className={styles.chartsGrid}>
              <div className={styles.chartCard}>
                <h2>Website Traffic</h2>
                <p>Daily website traffic trend analysis</p>
                <TrendChart 
                  data={chartData.productTrends} 
                  title="Website Traffic"
                  color="#8884d8"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>Page Views</h2>
                <p>User page browsing behavior analysis</p>
                <TrendChart 
                  data={chartData.marketTrends} 
                  title="Page Views"
                  color="#82ca9d"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>User Session Duration</h2>
                <p>Average user session duration statistics</p>
                <TrendChart 
                  data={chartData.userEngagement} 
                  title="User Session Duration"
                  color="#ffc658"
                />
              </div>
            </div>
            
            <div className={styles.insights}>
              <h2>Traffic Insights</h2>
              <div className={styles.insightsGrid}>
                <div className={styles.insight}>
                  <h3>📈 Traffic Growth</h3>
                  <p>Website traffic shows steady growth trends with increasing user engagement</p>
                </div>
                <div className={styles.insight}>
                  <h3>🎯 Page Optimization</h3>
                  <p>Growth in page views indicates improved content quality and user experience</p>
                </div>
                <div className={styles.insight}>
                  <h3>⏱️ Session Duration</h3>
                  <p>Increased average session duration shows improved content attractiveness</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'community':
        return (
          <div className={styles.tabContent}>
            <div className={styles.chartsGrid}>
              <div className={styles.chartCard}>
                <h2>Community Activity</h2>
                <p>Community member activity trend analysis</p>
                <TrendChart 
                  data={chartData.productTrends} 
                  title="Community Activity"
                  color="#ff6b6b"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>User Growth</h2>
                <p>Community user growth statistics</p>
                <TrendChart 
                  data={chartData.marketTrends} 
                  title="User Growth"
                  color="#4ecdc4"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>Engagement Rate</h2>
                <p>Community content engagement rate statistics</p>
                <TrendChart 
                  data={chartData.userEngagement} 
                  title="Engagement Rate"
                  color="#45b7d1"
                />
              </div>
            </div>
            
            <div className={styles.insights}>
              <h2>Community Insights</h2>
              <div className={styles.insightsGrid}>
                <div className={styles.insight}>
                  <h3>👥 Community Activity</h3>
                  <p>Community activity continues to increase with significant user participation</p>
                </div>
                <div className={styles.insight}>
                  <h3>📈 User Growth</h3>
                  <p>Steady growth in community users indicates expanding brand influence</p>
                </div>
                <div className={styles.insight}>
                  <h3>💬 Engagement Improvement</h3>
                  <p>Rising content engagement rates show increased user loyalty and sense of belonging</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'finance':
        return (
          <div className={styles.tabContent}>
            <div className={styles.chartsGrid}>
              <div className={styles.chartCard}>
                <h2>Revenue Trends</h2>
                <p>Monthly revenue growth trend analysis</p>
                <TrendChart 
                  data={chartData.productTrends} 
                  title="Revenue Trends"
                  color="#51cf66"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>Cost Control</h2>
                <p>Operating cost change trends</p>
                <TrendChart 
                  data={chartData.marketTrends} 
                  title="Cost Control"
                  color="#ffd43b"
                />
              </div>
              
              <div className={styles.chartCard}>
                <h2>Profit Margin</h2>
                <p>Overall profit margin changes</p>
                <TrendChart 
                  data={chartData.userEngagement} 
                  title="Profit Margin"
                  color="#339af0"
                />
              </div>
            </div>
            
            <div className={styles.insights}>
              <h2>Financial Insights</h2>
              <div className={styles.insightsGrid}>
                <div className={styles.insight}>
                  <h3>💰 Revenue Growth</h3>
                  <p>Revenue shows steady growth trends with good business development momentum</p>
                </div>
                <div className={styles.insight}>
                  <h3>📊 Cost Optimization</h3>
                  <p>Effective cost control with continuously improving operational efficiency</p>
                </div>
                <div className={styles.insight}>
                  <h3>📈 Profit Improvement</h3>
                  <p>Steadily improving profit margins with increasing profitability</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
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
        <h1>Data Trend Analysis</h1>
        <p>Explore data trends and user behavior analysis across different dimensions</p>
      </div>
      
      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={styles.tabIcon}>{tab.icon}</span>
            <span className={styles.tabLabel}>{tab.label}</span>
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default TrendsPage; 