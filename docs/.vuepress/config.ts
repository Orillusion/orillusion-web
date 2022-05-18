

import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { path } from '@vuepress/utils'
import { localTheme } from './theme'
// import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'

// import { defineUserConfig } from 'vuepress'
// import type { DefaultThemeOptions } from 'vuepress'
// import { path } from '@vuepress/utils'
import { head, navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'
console.log(path.resolve(__dirname, './theme'))
export default defineUserConfig({
	base: '/',
	head,
	// site-level locales config
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Orillusion | Link Uncharted',
			description: 'The Next Generation WebGPU Engine',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'Orillusion | 链接未来世界',
			description: 'Orillusion 次时代 WebGPU 引擎, 链接未来世界',
		},
	},
	bundler: isProd ? webpackBundler() : viteBundler(), // use vite in dev, use webpack in prod
	theme: localTheme({
		darkMode: true,
		logo: '/images/logo_black.png',
		logoDark: '/images/logo_white.png',
		repo: 'Orillusion/orillusion-web',
		docsDir: 'docs',

		// theme-level locales config
		locales: {
			/**
			 * English locale config
			 *
			 * As the default locale of @vuepress/theme-default is English,
			 * we don't need to set all of the locale fields
			 */
			'/': {
				// navbar
				navbar: navbar.en,
				// sidebar
				sidebar: sidebar.en,
				// page meta
				editLinkText: 'Edit this page on GitHub',
			},

			/**
			 * Chinese locale config
			 */
			'/zh/': {
				// navbar
				navbar: navbar.zh,
				selectLanguageName: '简体中文',
				selectLanguageText: '选择语言',
				selectLanguageAriaLabel: '选择语言',

				// sidebar
				sidebar: sidebar.zh,

				// page meta
				editLinkText: '在 GitHub 上编辑此页',
				lastUpdatedText: '上次更新',
				contributorsText: '贡献者',

				// custom containers
				tip: '提示',
				warning: '注意',
				danger: '警告',

				// 404 page
				notFound: [
					'这里什么都没有',
					'我们怎么到这来了？',
					'这是一个 404 页面',
					'看起来我们进入了错误的链接',
				],
				backToHome: '返回首页',

				// a11y
				openInNewWindow: '在新窗口打开',
				toggleDarkMode: '切换夜间模式',
				toggleSidebar: '切换侧边栏',
			},
		},
	}),
	plugins: [
		docsearchPlugin({
			appId: 'A4SU9IUJ2M',
			apiKey: '1a3b57b41821e82cafdd80621f042c9c',
			indexName: 'orillusion',
			searchParameters: {
				facetFilters: ['tags:v2'],
			},
			locales: {
				'/zh/': {
					placeholder: '搜索文档',
					translations: {
						button: {
							buttonText: '搜索文档',
							buttonAriaLabel: '搜索文档',
						},
						modal: {
							searchBox: {
								resetButtonTitle: '清除查询条件',
								resetButtonAriaLabel: '清除查询条件',
								cancelButtonText: '取消',
								cancelButtonAriaLabel: '取消',
							},
							startScreen: {
								recentSearchesTitle: '搜索历史',
								noRecentSearchesText: '没有搜索历史',
								saveRecentSearchButtonTitle: '保存至搜索历史',
								removeRecentSearchButtonTitle: '从搜索历史中移除',
								favoriteSearchesTitle: '收藏',
								removeFavoriteSearchButtonTitle: '从收藏中移除',
							},
							errorScreen: {
								titleText: '无法获取结果',
								helpText: '你可能需要检查你的网络连接',
							},
							footer: {
								selectText: '选择',
								navigateText: '切换',
								closeText: '关闭',
								searchByText: '搜索提供者',
							},
							noResultsScreen: {
								noResultsText: '无法找到相关结果',
								suggestedQueryText: '你可以尝试查询',
								reportMissingResultsText: '你认为该查询应该有结果？',
								reportMissingResultsLinkText: '点击反馈',
							},
						},
					}
				}
			}
		}),
		googleAnalyticsPlugin({
			id: 'G-0H9189CS0W',
		}),
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, './components'),
		}),
		// only enable shiki plugin in production mode
		isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
	]
})