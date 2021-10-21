const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@layout-header-background': 'rgba(255, 255, 255, 0)',
							'@primary-color': '#F54749'
						},
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
