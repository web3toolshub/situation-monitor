/**
 * Translations - English and Chinese
 */

import { derived } from 'svelte/store';
import { language, type Language } from './language';

export interface Translations {
	// Header
	logo: string;
	lastUpdated: string;
	neverRefreshed: string;
	refreshing: string;
	settings: string;
	
	// Panels
	politics: string;
	tech: string;
	finance: string;
	government: string;
	ai: string;
	intelligence: string;
	markets: string;
	commodities: string;
	crypto: string;
	heatmap: string;
	mainCharacter: string;
	correlation: string;
	narrative: string;
	monitors: string;
	globalSituation: string;
	whales: string;
	polymarket: string;
	contracts: string;
	layoffs: string;
	printer: string;
	fed: string;
	worldLeaders: string;
	
	// Situation panels
	venezuelaWatch: string;
	venezuelaSubtitle: string;
	greenlandWatch: string;
	greenlandSubtitle: string;
	iranCrisis: string;
	iranSubtitle: string;
	
	// Map
	high: string;
	elevated: string;
	low: string;
	zoomIn: string;
	zoomOut: string;
	reset: string;
	
	// Common
	loading: string;
	error: string;
	retry: string;
	noData: string;
	alert: string;
	region: string;
	topics: string;
	source: string;
	time: string;
	
	// Settings
	enablePanel: string;
	preset: string;
	presetMinimal: string;
	presetStandard: string;
	presetFull: string;
	presetCustom: string;
	reconfigure: string;
	close: string;
	
	// Onboarding
	welcome: string;
	selectPreset: string;
	
	// News
	news: string;
	
	// Analysis
	emergingPatterns: string;
	momentumSignals: string;
	crossSourceCorrelations: string;
	predictiveSignals: string;
	monitoring: string;
	noSignals: string;
}

const translations: Record<Language, Translations> = {
	en: {
		// Header
		logo: 'SITUATION MONITOR',
		lastUpdated: 'Last updated:',
		neverRefreshed: 'Never refreshed',
		refreshing: 'Refreshing...',
		settings: 'Settings',
		
		// Panels
		politics: 'Politics',
		tech: 'Tech',
		finance: 'Finance',
		government: 'Government',
		ai: 'AI',
		intelligence: 'Intelligence',
		markets: 'Markets',
		commodities: 'Commodities',
		crypto: 'Crypto',
		heatmap: 'Heatmap',
		mainCharacter: 'Main Character',
		correlation: 'Correlation',
		narrative: 'Narrative',
		monitors: 'Monitors',
		globalSituation: 'Global Situation',
		whales: 'Whales',
		polymarket: 'Polymarket',
		contracts: 'Contracts',
		layoffs: 'Layoffs',
		printer: 'Money Printer',
		fed: 'Fed',
		worldLeaders: 'World Leaders',
		
		// Situation panels
		venezuelaWatch: 'Venezuela Watch',
		venezuelaSubtitle: 'Humanitarian crisis monitoring',
		greenlandWatch: 'Greenland Watch',
		greenlandSubtitle: 'Arctic geopolitics monitoring',
		iranCrisis: 'Iran Crisis',
		iranSubtitle: 'Revolution protests, regime instability & nuclear program',
		
		// Map
		high: 'High',
		elevated: 'Elevated',
		low: 'Low',
		zoomIn: 'Zoom in',
		zoomOut: 'Zoom out',
		reset: 'Reset',
		
		// Common
		loading: 'Loading...',
		error: 'Error',
		retry: 'Retry',
		noData: 'No data available',
		alert: 'Alert',
		region: 'Region',
		topics: 'Topics',
		source: 'Source',
		time: 'Time',
		
		// Settings
		enablePanel: 'Enable panel',
		preset: 'Preset',
		presetMinimal: 'Minimal',
		presetStandard: 'Standard',
		presetFull: 'Full',
		presetCustom: 'Custom',
		reconfigure: 'Reconfigure',
		close: 'Close',
		
		// Onboarding
		welcome: 'Welcome to Situation Monitor',
		selectPreset: 'Select a preset to get started',
		
		// News
		news: 'News',
		
		// Analysis
		emergingPatterns: 'Emerging Patterns',
		momentumSignals: 'Momentum Signals',
		crossSourceCorrelations: 'Cross-Source Correlations',
		predictiveSignals: 'Predictive Signals',
		monitoring: 'MONITORING',
		noSignals: 'NO DATA'
	},
	zh: {
		// Header
		logo: '态势监控',
		lastUpdated: '上次更新:',
		neverRefreshed: '从未刷新',
		refreshing: '刷新中...',
		settings: '设置',
		
		// Panels
		politics: '政治',
		tech: '科技',
		finance: '金融',
		government: '政府',
		ai: '人工智能',
		intelligence: '情报',
		markets: '市场',
		commodities: '大宗商品',
		crypto: '加密货币',
		heatmap: '热力图',
		mainCharacter: '主要人物',
		correlation: '关联分析',
		narrative: '叙事追踪',
		monitors: '监控',
		globalSituation: '全球态势',
		whales: '巨鲸交易',
		polymarket: '预测市场',
		contracts: '政府合同',
		layoffs: '裁员',
		printer: '货币印刷',
		fed: '美联储',
		worldLeaders: '世界领袖',
		
		// Situation panels
		venezuelaWatch: '委内瑞拉局势',
		venezuelaSubtitle: '人道主义危机监测',
		greenlandWatch: '格陵兰局势',
		greenlandSubtitle: '北极地缘政治监测',
		iranCrisis: '伊朗危机',
		iranSubtitle: '革命抗议、政权不稳与核计划',
		
		// Map
		high: '高',
		elevated: '中',
		low: '低',
		zoomIn: '放大',
		zoomOut: '缩小',
		reset: '重置',
		
		// Common
		loading: '加载中...',
		error: '错误',
		retry: '重试',
		noData: '暂无数据',
		alert: '警报',
		region: '地区',
		topics: '话题',
		source: '来源',
		time: '时间',
		
		// Settings
		enablePanel: '启用面板',
		preset: '预设',
		presetMinimal: '简洁',
		presetStandard: '标准',
		presetFull: '完整',
		presetCustom: '自定义',
		reconfigure: '重新配置',
		close: '关闭',
		
		// Onboarding
		welcome: '欢迎使用态势监控',
		selectPreset: '选择一个预设开始',
		
		// News
		news: '新闻',
		
		// Analysis
		emergingPatterns: '新兴模式',
		momentumSignals: '动量信号',
		crossSourceCorrelations: '跨源关联',
		predictiveSignals: '预测信号',
		monitoring: '监控中',
		noSignals: '无数据'
	}
};

// Derived store that returns translations based on current language
export const t = derived(language, ($lang) => translations[$lang]);

// Helper function to get translation directly
export function getTranslation(key: keyof Translations): string {
	const lang = language.get();
	return translations[lang][key];
}
