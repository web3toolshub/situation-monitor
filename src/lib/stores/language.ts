/**
 * Language store - manages current language state
 */

import { writable, derived, get } from 'svelte/store';
import { browser } from '$app/environment';

export type Language = 'en' | 'zh';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE: Language = 'en';

function getInitialLanguage(): Language {
	if (!browser) return DEFAULT_LANGUAGE;
	
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'zh' || stored === 'en') {
			return stored;
		}
	} catch {
		// localStorage not available
	}
	
	// Try to detect from browser language
	if (browser && navigator.language.startsWith('zh')) {
		return 'zh';
	}
	
	return DEFAULT_LANGUAGE;
}

function createLanguageStore() {
	const { subscribe, set, update } = writable<Language>(getInitialLanguage());

	return {
		subscribe,
		
		set(lang: Language) {
			set(lang);
			if (browser) {
				try {
					localStorage.setItem(STORAGE_KEY, lang);
				} catch {
					// localStorage not available
				}
			}
		},
		
		toggle() {
			update(current => {
				const newLang = current === 'en' ? 'zh' : 'en';
				if (browser) {
					try {
						localStorage.setItem(STORAGE_KEY, newLang);
					} catch {
						// localStorage not available
					}
				}
				return newLang;
			});
		},
		
		get(): Language {
			return get({ subscribe });
		}
	};
}

export const language = createLanguageStore();

// Derived store for checking current language
export const isZh = derived(language, ($lang) => $lang === 'zh');
export const isEn = derived(language, ($lang) => $lang === 'en');
