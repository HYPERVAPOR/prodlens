# Trends API 集成指南

## 概述

这个 `/trends` 页面目前使用模拟数据来展示 AI 产品趋势分析。要连接到真实的后端 API，请按照以下步骤进行配置。

## 当前实现

### 前端组件
- `src/app/trends/page.tsx` - 趋势页面路由
- `src/components/trends/TrendsPage.tsx` - 主趋势页面组件
- `src/components/trends/TrendChart.tsx` - 折线图组件
- `src/app/api/trends/route.ts` - API 路由（当前使用模拟数据）

### 数据结构

趋势数据包含三个主要指标：

```typescript
interface ChartData {
  productTrends: TrendData[];    // AI 工具产品趋势
  marketTrends: TrendData[];     // 市场增长趋势
  userEngagement: TrendData[];   // 用户参与度趋势
}

interface TrendData {
  date: string;      // 日期格式：'2024-01'
  value: number;     // 数值
  category: string;  // 分类名称
}
```

## 连接到真实后端

### 1. 修改 API 路由

编辑 `src/app/api/trends/route.ts`：

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 替换为您的后端 API 地址
    const response = await fetch('http://your-backend-url/api/trends', {
      headers: {
        'Content-Type': 'application/json',
        // 如果需要认证，添加相应的 headers
        // 'Authorization': 'Bearer your-token'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching trends data:', error);
    return NextResponse.json(
      { error: '获取趋势数据失败' },
      { status: 500 }
    );
  }
}
```

### 2. 环境变量配置

创建或编辑 `.env.local` 文件：

```env
NEXT_PUBLIC_BACKEND_URL=http://your-backend-url
BACKEND_API_KEY=your-api-key-if-needed
```

然后在 API 路由中使用：

```typescript
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const apiKey = process.env.BACKEND_API_KEY;
```

### 3. 后端 API 要求

您的后端需要提供以下 API 端点：

**GET /api/trends**

响应格式：
```json
{
  "productTrends": [
    { "date": "2024-01", "value": 120, "category": "AI Tools" },
    { "date": "2024-02", "value": 150, "category": "AI Tools" }
  ],
  "marketTrends": [
    { "date": "2024-01", "value": 80, "category": "Market Growth" },
    { "date": "2024-02", "value": 95, "category": "Market Growth" }
  ],
  "userEngagement": [
    { "date": "2024-01", "value": 60, "category": "User Engagement" },
    { "date": "2024-02", "value": 75, "category": "User Engagement" }
  ]
}
```

### 4. 错误处理

前端已经包含了完整的错误处理机制：
- 加载状态显示
- 错误信息展示
- 重试功能

### 5. 数据更新频率

如果需要实时数据更新，可以在 `TrendsPage.tsx` 中添加定时器：

```typescript
useEffect(() => {
  fetchTrendData();
  
  // 每 5 分钟更新一次数据
  const interval = setInterval(fetchTrendData, 5 * 60 * 1000);
  
  return () => clearInterval(interval);
}, []);
```

## 自定义图表

### 添加新的图表类型

1. 在 `TrendsPage.tsx` 中添加新的数据字段
2. 在 `TrendChart.tsx` 中支持新的图表类型
3. 更新样式文件以适应新的布局

### 修改图表样式

编辑 `TrendChart.module.scss` 来自定义图表外观。

## 部署注意事项

1. 确保后端 API 在生产环境中可访问
2. 配置正确的 CORS 设置
3. 设置适当的环境变量
4. 测试 API 连接和错误处理

## 故障排除

### 常见问题

1. **CORS 错误**: 确保后端允许前端域名的跨域请求
2. **API 超时**: 增加请求超时时间或实现重试机制
3. **数据格式不匹配**: 确保后端返回的数据格式与前端期望的一致

### 调试技巧

1. 在浏览器开发者工具中检查网络请求
2. 查看控制台错误信息
3. 使用 Postman 或类似工具测试后端 API 