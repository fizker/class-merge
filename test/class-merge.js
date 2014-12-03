var cm = require('../index');

describe('class-merge.js', function() {
	describe('Called with a single string', function() {
		it('should return said string', function() {
			var input = 'ab cd';
			expect(cm(input)).to.equal(input);
		});
	});

	describe('Called with multiple strings', function() {
		it('should concatenate them', function() {
			expect(cm('ab cd', 'ef')).to.equal('ab cd ef');
		});
	});

	describe('Called with the same string twice', function() {
		it('should concatenate them', function() {
			expect(cm('ab', 'ab')).to.equal('ab ab');
		});
	});

	describe('Called with null', function() {
		it('should concatenate the not-null strings', function() {
			expect(cm('ab', null, 'cd')).to.equal('ab cd');
		});
	});

	describe('Called with an object', function() {
		describe('with a `className` prop', function() {
			it('should append the `className` prop', function() {
				expect(cm('ab', { className: '123' }, 'cd')).to.equal('ab 123 cd');
			});
		});

		describe('with no `className` props', function() {
			it('should ignore the object', function() {
				expect(cm('ab', { a: 1 }, 'cd')).to.equal('ab cd');
			});
		});
	});
});
