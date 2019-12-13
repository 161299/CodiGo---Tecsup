(function () {
  'use strict';

  const expect = require('chai').expect;
  const Intake = require('../index');
  const intake = new Intake();

  describe('#toBoolean', function() {
    it('"True" returns true', function() {
      expect(intake.toBoolean('True')).to.equal(true);
    });
    it('"true" returns true', function() {
      expect(intake.toBoolean('true')).to.equal(true);
    });
    it('true returns true', function() {
      expect(intake.toBoolean(true)).to.equal(true);
    });
    it('"1" returns true', function() {
      expect(intake.toBoolean('1')).to.equal(true);
    });
    it('1 returns true', function() {
      expect(intake.toBoolean(1)).to.equal(true);
    });
    it('"False" returns false', function() {
      expect(intake.toBoolean('False')).to.equal(false);
    });
    it('"false" returns false', function() {
      expect(intake.toBoolean('false')).to.equal(false);
    });
    it('false returns false', function() {
      expect(intake.toBoolean(false)).to.equal(false);
    });
    it('"0" returns false', function() {
      expect(intake.toBoolean('0')).to.equal(false);
    });
    it('0 returns false', function() {
      expect(intake.toBoolean(0)).to.equal(false);
    });
    it('"test" returns "test"', function() {
      expect(intake.toBoolean('test')).to.equal('test');
    });
  });

}());
