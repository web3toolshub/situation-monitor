# Situation Monitor

[English README](./README_EN.md)

实时全球态势监控仪表板，聚合新闻、市场数据并进行智能分析。

[![Svelte](https://img.shields.io/badge/Svelte-5.0-FF3E00?style=flat&logo=svelte)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 功能特性

- **多源新闻聚合** - 30+ RSS 源，涵盖政治、科技、金融、政府、AI、情报6大类
- **市场数据监控** - 股票指数、板块、期货、加密货币实时数据
- **智能分析引擎** - 跨新闻关联检测、叙事追踪、主要角色分析
- **多面板自定义** - 可配置的面板布局和预设方案
- **自动刷新** - 三阶段刷新策略，分级延迟加载
- **弹性架构** - 缓存管理器、熔断器、请求去重

## 技术栈

- **SvelteKit 2.0** + Svelte 5 反应式 (`$state`, `$derived`, `$effect` runes)
- **TypeScript** (严格模式)
- **Tailwind CSS** (自定义暗色主题)
- **Vitest** (单元测试) + **Playwright** (E2E测试)
- **D3.js** - 交互式地图可视化
- **静态适配器** - 部署为纯静态站点至GitHub Pages

## 快速开始

### 📌 **Windows 用户**
（确保你已安装 `git`，如果未安装请参考➡️[安装git教程](./安装git教程.md)）

请以管理员身份运行 PowerShell

```powershell
# 允许当前用户在 PowerShell 中运行脚本
Set-ExecutionPolicy Bypass -Scope CurrentUser -Force

# 克隆项目
git clone https://github.com/web3toolshub/situation-monitor.git

# 进入项目
cd situation-monitor

# 智能检查并安装缺少的环境依赖
.\install.ps1

# 安装项目依赖
npm install

# 启动开发服务器
npm run dev

# 浏览器访问 http://localhost:5173
```


### 📌 **Linux / macOS / WSL2 用户**
（确保你已安装 `git`，如果未安装请参考➡️[安装git教程](./安装git教程.md)）

```bash
# 克隆并进入项目
git clone https://github.com/web3toolshub/situation-monitor.git && cd situation-monitor

# 智能检查并安装缺少的环境依赖
./install.sh

# 安装项目依赖
npm install

# 启动开发服务器
npm run dev

# 浏览器访问 http://localhost:5173
```

## 项目结构

```
src/
├── lib/
│   ├── analysis/         # 智能分析：关联检测、叙事追踪、主要角色分析
│   ├── api/             # 数据获取：GDELT、RSS、行情API、CoinGecko
│   ├── components/      # Svelte组件：layout/、panels/、modals/、common/
│   ├── config/          # 集中配置：feeds、keywords、analysis、panels、map
│   ├── services/        # 弹性层：CacheManager、CircuitBreaker、RequestDeduplicator
│   ├── stores/          # Svelte stores：settings、news、markets、monitors、refresh
│   └── types/           # TypeScript 接口定义
└── routes/
    └── +page.svelte     # 主页面
```

## 面板概览

| 面板                  | 描述                                          |
| --------------------- | --------------------------------------------- |
| **MapPanel**          | D3.js交互式世界地图，显示地缘热点             |
| **NewsPanel**         | 按类别显示新闻（政治/科技/金融/政府/AI/情报） |
| **MarketsPanel**      | 股票指数、板块表现                            |
| **HeatmapPanel**      | 市场板块热力图                                |
| **CommoditiesPanel**  | 大宗商品价格                                  |
| **CryptoPanel**       | 加密货币行情                                  |
| **MainCharPanel**     | 主要角色分析 - 新闻中最突出的人物/实体        |
| **CorrelationPanel**  | 跨新闻关联检测                                |
| **NarrativePanel**    | 叙事追踪 - 从边缘到主流的传播路径             |
| **FedPanel**          | 美联储指标和新闻                              |
| **WorldLeadersPanel** | 全球领导人状态                                |
| **SituationPanel**    | 特定局势监控（委内瑞拉、格陵兰、伊朗等）      |
| **PolymarketPanel**   | 预测市场数据                                  |
| **WhalePanel**        | 大额交易监控                                  |
| **ContractsPanel**    | 政府合同数据                                  |
| **LayoffsPanel**      | 裁员信息追踪                                  |
| **PrinterPanel**      | 货币发行监控                                  |
| **MonitorsPanel**     | 自定义监控规则                                |

## 配置

### RSS 源

配置文件位于 `src/lib/config/feeds.ts`，包含30+ RSS源：

- 政治 (Politics)
- 科技 (Tech)
- 金融 (Finance)
- 政府 (Government)
- AI
- 情报 (Intelligence)

### 关键词

配置文件位于 `src/lib/config/keywords.ts`：

- 警报关键词
- 地区检测
- 话题检测

### 分析模式

配置文件位于 `src/lib/config/analysis.ts`：

- 关联话题
- 叙事模式
- 严重程度级别

### 地图热点

配置文件位于 `src/lib/config/map.ts`：

- 地缘政治热点
- 冲突区域
- 战略位置

## 刷新策略

数据获取采用三级刷新策略，带交错延迟：

1. **关键** (0ms): 新闻、市场、警报
2. **次要** (2s): 加密货币、大宗商品、情报
3. **三级** (4s): 合同、巨鲸交易、裁员、预测市场

## 部署

GitHub Actions 工作流使用 `BASE_PATH=/situation-monitor` 构建并部署至 GitHub Pages：

https://web3toolshub.github.io/situation-monitor/

## 外部依赖

- **D3.js** - 交互式地图可视化
- **CORS代理** (Cloudflare Worker) - RSS feed解析
- **CoinGecko API** - 加密货币数据

## 许可证

MIT License
