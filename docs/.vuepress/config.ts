import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'
console.log(path.resolve(__dirname, './theme'))
export default defineUserConfig<DefaultThemeOptions>({
	base: '/',
	head: [
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				href: `/images/icons/icon-192.png`,
			},
		],
		['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
		['meta', { name: 'application-name', content: 'Orillusion' }],
		['meta', { name: 'apple-mobile-web-app-title', content: 'Orillusion' }],
		[
			'meta',
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
		],
		[
			'link',
			{ rel: 'apple-touch-icon', href: `/images/icons/icon-512.png` },
		],
		['meta', { name: 'msapplication-TileColor', content: '#22272e' }],
		['meta', { name: 'theme-color', content: '#22272e' }],
	],
	// site-level locales config
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Orillusion',
			description: 'The Next Generation WebGPU Engine',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'Orillusion',
			description: 'Orillusion 次时代 WebGPU 引擎',
		},
	},
	bundler: isProd ? '@vuepress/webpack' : '@vuepress/vite', // use vite in dev, use webpack in prod
	theme: path.resolve(__dirname, './theme'),
	themeConfig: {
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
	},
	plugins: [
		['@vuepress/plugin-debug'],
		[
			'@vuepress/plugin-docsearch',
			{
				appId: 'A4SU9IUJ2M',
				apiKey: '1a3b57b41821e82cafdd80621f042c9c',
				indexName: 'orillusion',
				searchParameters: {
					facetFilters: ['tags:v2'],
				},
				placeholder: 'Search API',
				locales: {
					'/zh/': {
						placeholder: '搜索文档',
					},
				},
			},
		],
		[
			'@vuepress/plugin-register-components',
			{
				componentsDir: path.resolve(__dirname, './components'),
			},
		],
		// only enable shiki plugin in production mode
		[
			'@vuepress/plugin-shiki',
			isProd
				? {
					theme: 'dark-plus',
				}
				: false,
		]
	]
})