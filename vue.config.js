module.exports = {
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'FEDO';
			args[0].template = 'public/index.html';
			return args
		});
	},
	productionSourceMap: false,
	pwa: {
		name: 'FEDO',
		themeColor: '#472f91',
	}
}