const foobar = (value) => {
    let result = '';
    if (value % 2 === 0) {
        result += 'foo'
    }
    if (value % 3 === 0) {
        result += 'bar';
    }
    return result;
}

module.exports = foobar;