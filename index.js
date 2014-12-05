module.exports = function(/* ...classes */) {
	/* The actual code is an optimized version of this snippet

	The main differences between this and the others in the test is the additional null-checks
	// http://jsperf.com/joinclasses-args-vs-array/12

	var classes = Array.prototype.slice.call(arguments);
	return classes
		.map(function(obj) { return obj && obj.className || obj })
		.filter(function(str) { return typeof(str) == 'string' })
		.join(' ');
	*/

	var out = ''

	var l = arguments.length
	for(var i = 0; i < l; i++) {
		var obj = arguments[i]
		var str = obj && obj.className || obj
		if(typeof(str) == 'string') out += ' ' + str
	}
	return out
};
