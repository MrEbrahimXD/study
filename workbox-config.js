module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,json,mp3,js,png,jpg,webp,svg,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};