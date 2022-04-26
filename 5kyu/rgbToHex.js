function rgb(r, g, b) {
    function toHex(a) {
        if (a <= 0) return '00';
        else if (a >= 255) return 'FF';
        else return a.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
}