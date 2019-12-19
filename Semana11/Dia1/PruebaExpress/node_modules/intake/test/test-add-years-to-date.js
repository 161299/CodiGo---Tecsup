(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#addYearsToDate', function() {
		it('add one year to a date', function() {
			var date = '1/1/2015';
			var result = intake.addYearsToDate(date, 1);
			expect(result.toLocaleDateString("en-US")).to.equal('1/1/2016');
		});
		it('add ten years to a date', function() {
			var date = '9/1/2015';
			var result = intake.addYearsToDate(date, 10);
			expect(result.toLocaleDateString("en-US")).to.equal('9/1/2025');
		});		
		it('add minus one year to a date', function() {
			var date = '1/1/2015';
			var result = intake.addYearsToDate(date, -1);
			expect(result.toLocaleDateString("en-US")).to.equal('1/1/2014');
		});
		it('expect a non-date to return the same value', function() {
			var date = 'test';
			var result = intake.addYearsToDate(date, 1);
			expect(result).to.equal('test');
		});
		it('expect a date without years to add to be the same date', function() {
			var date = '9/1/2015';
			var result = intake.addYearsToDate(date);
			expect(result.toLocaleDateString("en-US")).to.equal('9/1/2015');
		});		
	});

}());
