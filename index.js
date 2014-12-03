module.exports = function(/* ...classes */) {
	var classes = Array.prototype.slice.call(arguments);
	return classes
		.map(function(obj) { return obj && obj.className || obj })
		.filter(function(str) { return typeof(str) == 'string' })
		.join(' ');
};
