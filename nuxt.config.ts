// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'~/assets/scss/main.scss',
		'material-design-icons/iconfont/material-icons.css',
	],
	modules: ['@pinia/nuxt'],
	pinia: {
		storesDirs: ['./stores/**'],
	},
});
