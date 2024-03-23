var expect = require('chai').expect;

describe('A big test', function () {
    it('Testing a string', function () {
        const test = 'Hello';
        expect(test).to.eq('Hello');
    });
});