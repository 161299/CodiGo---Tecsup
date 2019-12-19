(function () {
   'use strict';

	var expect = require('chai').expect;
	var Intake = require('../index');
	var intake = new Intake();

	describe('#getDateDiff', function() {
		it('return one second difference between two dates', function() {
			var d1 = new Date('2015', '9', '1', '10', '15', '30', '0');
			var d2 = new Date('2015', '9', '1', '10', '15', '31', '0');
			var result = intake.getDateDiff(d1, d2, 'seconds');
			expect(result).to.equal(1);
		});
		it('return negative one second difference between two dates', function() {
			var d1 = new Date('2015', '9', '1', '10', '15', '31', '0');
			var d2 = new Date('2015', '9', '1', '10', '15', '30', '0');
			var result = intake.getDateDiff(d1, d2, 'seconds');
			expect(result).to.equal(-1);
		});		
		it('return one minute difference between two dates', function() {
			var d1 = new Date('2015', '9', '1', '10', '15', '30', '0');
			var d2 = new Date('2015', '9', '1', '10', '16', '30', '0');
			var result = intake.getDateDiff(d1, d2, 'minutes');
			expect(result).to.equal(1);
		});
		it('return one hour difference between two dates', function() {
			var d1 = new Date('2015', '9', '1', '10', '15', '30', '0');
			var d2 = new Date('2015', '9', '1', '11', '15', '30', '0');
			var result = intake.getDateDiff(d1, d2, 'hours');
			expect(result).to.equal(1);
		});
		it('return one day difference between two dates', function() {
			var d1 = '1/1/2015';
			var d2 = '1/2/2015';
			var result = intake.getDateDiff(d1, d2, 'days');
			expect(result).to.equal(1);
		});
		it('return one week difference between two dates', function() {
			var d1 = '1/1/2015';
			var d2 = '1/8/2015';
			var result = intake.getDateDiff(d1, d2, 'weeks');
			expect(result).to.equal(1);
		});
		it('return one month difference between two dates', function() {
			var d1 = '1/1/2015';
			var d2 = '2/1/2015';
			var result = intake.getDateDiff(d1, d2, 'months');
			expect(result).to.equal(1);
		});		
		it('return one year difference between two dates', function() {
			var d1 = '1/1/2014';
			var d2 = '1/1/2015';
			var result = intake.getDateDiff(d1, d2, 'years');
			expect(result).to.equal(1);
		});
		it('return undefined if interval is unknown', function() {
			var d1 = '1/1/2014';
			var d2 = '1/1/2015';
			var result = intake.getDateDiff(d1, d2, 'test');
			expect(result).to.equal(undefined);
		});		
		it('return NaN if one or both of the dates are not a date', function() {
			var d1 = '1/1/2014';
			var d2 = 'test';
			var result = intake.getDateDiff(d1, d2, 'days');
			expect(isNaN(result)).to.equal(true);
		});				
	});

}());
