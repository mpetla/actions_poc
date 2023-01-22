const logic = require('./logic');

test('foo', () => {
    expect(logic(2)).toBe('foo');
});

test('bar', () => {
    expect(logic(3)).toBe('bar');
});

test('foobar', () => {
    expect(logic(6)).toBe('foobar');
});