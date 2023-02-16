module.exports = function reverse(n) {
    let res = '';

    n = String(Math.abs(n));
    while (n[n.length - 1] === '0') {
        n = n.slice(0, n.length - 1);
    }
    for (let i of n) {res = `${i}${res}`;}
    
    return res;
}
