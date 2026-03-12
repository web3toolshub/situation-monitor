# Situation Monitor

[中文版 README](./README.md)

Real-time global situation monitoring dashboard that aggregates news, market data, and provides intelligent analysis.

[![Svelte](https://img.shields.io/badge/Svelte-5.0-FF3E00?style=flat&logo=svelte)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Multi-source News Aggregation** - 30+ RSS feeds covering Politics, Tech, Finance, Government, AI, and Intelligence
- **Market Data Monitoring** - Real-time stock indices, sectors, futures, and cryptocurrency data
- **Intelligent Analysis Engine** - Cross-news correlation detection, narrative tracking, and key actor analysis
- **Customizable Multi-panel Layout** - Configurable panel layouts and preset schemes
- **Auto-refresh** - Three-stage refresh strategy with staggered delayed loading
- **Resilient Architecture** - Cache manager, circuit breaker, request deduplication

## Tech Stack

- **SvelteKit 2.0** + Svelte 5 reactive (`$state`, `$derived`, `$effect` runes)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom dark theme)
- **Vitest** (unit tests) + **Playwright** (E2E tests)
- **D3.js** - Interactive map visualization
- **Static Adapter** - Deployed as a pure static site to GitHub Pages

## Quick Start

### 📌 **Windows Users**
(Make sure you have `git` installed. If not, refer to ➡️[Git Installation Tutorial](./安装git教程.md))

Run PowerShell as Administrator

```powershell
# Allow running scripts in PowerShell for current user
Set-ExecutionPolicy Bypass -Scope CurrentUser -Force

# Clone project
git clone https://github.com/web3toolshub/situation-monitor.git

# Go to project directory
cd situation-monitor

# Smart check and install missing dependencies
.\install.ps1

# Install project dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:5173 in browser
```

### 📌 **Linux / macOS / WSL Users**
(Make sure you have `git` installed. If not, refer to ➡️[Git Installation Tutorial](./安装git教程.md))

```bash
# Clone and enter project
git clone https://github.com/web3toolshub/situation-monitor.git && cd situation-monitor

# Smart check and install missing dependencies
./install.sh

# Install project dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:5173 in browser
```

## Project Structure

```
src/
├── lib/
│   ├── analysis/         # Intelligent analysis: correlation detection, narrative tracking, key actor analysis
│   ├── api/              # Data fetching: GDELT, RSS, market APIs, CoinGecko
│   ├── components/       # Svelte components: layout/, panels/, modals/, common/
│   ├── config/           # Centralized config: feeds, keywords, analysis, panels, map
│   ├── services/         # Resilience layer: CacheManager, CircuitBreaker, RequestDeduplicator
│   ├── stores/           # Svelte stores: settings, news, markets, monitors, refresh
│   └── types/            # TypeScript interface definitions
└── routes/
    └── +page.svelte     # Main page
```

## Panel Overview

| Panel                 | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| **MapPanel**          | D3.js interactive world map showing geopolitical hotspots           |
| **NewsPanel**         | News by category (Politics/Tech/Finance/Government/AI/Intelligence) |
| **MarketsPanel**      | Stock indices and sector performance                                |
| **HeatmapPanel**      | Market sector heatmap                                               |
| **CommoditiesPanel**  | Commodity prices                                                    |
| **CryptoPanel**       | Cryptocurrency prices                                               |
| **MainCharPanel**     | Key actor analysis - most prominent people/entities in news         |
| **CorrelationPanel**  | Cross-news correlation detection                                    |
| **NarrativePanel**    | Narrative tracking - propagation path from fringe to mainstream     |
| **FedPanel**          | Federal Reserve indicators and news                                 |
| **WorldLeadersPanel** | Global leader status                                                |
| **SituationPanel**    | Specific situation monitoring (Venezuela, Greenland, Iran, etc.)    |
| **PolymarketPanel**   | Prediction market data                                              |
| **WhalePanel**        | Large transaction monitoring                                        |
| **ContractsPanel**    | Government contract data                                            |
| **LayoffsPanel**      | Layoff information tracking                                         |
| **PrinterPanel**      | Currency printing monitoring                                        |
| **MonitorsPanel**     | Custom monitoring rules                                             |

## Configuration

### RSS Feeds

Configuration file at `src/lib/config/feeds.ts` contains 30+ RSS feeds:

- Politics
- Tech
- Finance
- Government
- AI
- Intelligence

### Keywords

Configuration file at `src/lib/config/keywords.ts`:

- Alert keywords
- Region detection
- Topic detection

### Analysis Patterns

Configuration file at `src/lib/config/analysis.ts`:

- Related topics
- Narrative patterns
- Severity levels

### Map Hotspots

Configuration file at `src/lib/config/map.ts`:

- Geopolitical hotspots
- Conflict zones
- Strategic locations

## Refresh Strategy

Data fetching uses a three-tier refresh strategy with staggered delays:

1. **Critical** (0ms): News, Markets, Alerts
2. **Secondary** (2s): Crypto, Commodities, Intelligence
3. **Tertiary** (4s): Contracts, Whale trades, Layoffs, Prediction markets

## Deployment

GitHub Actions workflow builds and deploys to GitHub Pages using `BASE_PATH=/situation-monitor`:

https://web3toolshub.github.io/situation-monitor/

## External Dependencies

- **D3.js** - Interactive map visualization
- **CORS Proxy** (Cloudflare Worker) - RSS feed parsing
- **CoinGecko API** - Cryptocurrency data

## License

MIT License
