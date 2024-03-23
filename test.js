var expect = require('chai').expect;

describe('A big test', function () {
    it('Testing a string', function () {
        const test = 'Hello';
        expect(test).to.eq('Hello');
    });

    it('Testing a number', function () {
        const test = 1;
        expect(test).to.eq(1);
    });
});