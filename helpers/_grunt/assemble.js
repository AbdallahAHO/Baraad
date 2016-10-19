module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: [
			'<%= paths.src %>/templating/data/**/*.json',
			'<%= paths.src %>/templating/data/**/*.yml',
			'<%= paths.src %>/templating/partials/**/*.json'
		],
		helpers: '<%= paths.src %>/templating/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templating/layouts/',
		layout: false, 
		partials: [
			'<%= paths.src %>/templating/partials/**/*.hbs',
			'<%= paths.src %>/templating/layouts/*.hbs'
		],
		collections: [
			'sitemap'
		]
	},
	pages: {
		options: {
		plugins: ['assemble-contrib-sitemap'],
		},
		files: [{
			cwd: '<%= paths.src %>/templating/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
	}
};