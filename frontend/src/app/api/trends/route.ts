import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 这里应该连接到您的后端 API
    // const response = await fetch('http://your-backend-url/api/trends');
    // const data = await response.json();
    
    // 模拟后端数据响应
    const mockData = {
      productTrends: [
        { date: '2024-01', value: 120, category: 'AI Tools' },
        { date: '2024-02', value: 150, category: 'AI Tools' },
        { date: '2024-03', value: 180, category: 'AI Tools' },
        { date: '2024-04', value: 200, category: 'AI Tools' },
        { date: '2024-05', value: 220, category: 'AI Tools' },
        { date: '2024-06', value: 250, category: 'AI Tools' },
        { date: '2024-07', value: 280, category: 'AI Tools' },
        { date: '2024-08', value: 300, category: 'AI Tools' },
      ],
      marketTrends: [
        { date: '2024-01', value: 80, category: 'Market Growth' },
        { date: '2024-02', value: 95, category: 'Market Growth' },
        { date: '2024-03', value: 110, category: 'Market Growth' },
        { date: '2024-04', value: 125, category: 'Market Growth' },
        { date: '2024-05', value: 140, category: 'Market Growth' },
        { date: '2024-06', value: 160, category: 'Market Growth' },
        { date: '2024-07', value: 175, category: 'Market Growth' },
        { date: '2024-08', value: 190, category: 'Market Growth' },
      ],
      userEngagement: [
        { date: '2024-01', value: 60, category: 'User Engagement' },
        { date: '2024-02', value: 75, category: 'User Engagement' },
        { date: '2024-03', value: 85, category: 'User Engagement' },
        { date: '2024-04', value: 100, category: 'User Engagement' },
        { date: '2024-05', value: 115, category: 'User Engagement' },
        { date: '2024-06', value: 130, category: 'User Engagement' },
        { date: '2024-07', value: 145, category: 'User Engagement' },
        { date: '2024-08', value: 160, category: 'User Engagement' },
      ]
    };

    // 添加随机延迟模拟网络请求
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Error fetching trends data:', error);
    return NextResponse.json(
      { error: '获取趋势数据失败' },
      { status: 500 }
    );
  }
} 