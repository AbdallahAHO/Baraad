module.exports = {
	syncing: {
		tasks: [
			'sync'
		],
		options: {
			logConcurrentOutput: true
		}
	},
	hintAndDocs: {
		tasks: [
			'htmlmin',
			'htmlhint'
		],
		options: {
			logConcurrentOutput: true,
			limit: 5
		}
	}
};