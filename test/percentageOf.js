const percentageOf = require('../percentageOf.js');

const { test } = QUnit;

QUnit.module('TEST_SUITE_01');

test('TEST_CASE_01', async assert => {
	assert.equal(await percentageOf('10', '50'), '5');
});

test('TEST_CASE_02', async assert => {
	assert.equal(await percentageOf('12.5', '548'), '68.5');
});

test('TEST_CASE_03', async assert => {
	assert.equal(await percentageOf('376', '172.48'), '648.5248');
});

test('TEST_CASE_04', async assert => {
	assert.equal(await percentageOf('216.72', '539.112'), '1168.3635264');
});
