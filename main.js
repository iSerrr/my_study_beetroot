const minEvent = n => {
    const min = x => (x === 0) ? "четное" : (x === 1) ? "не четное" : min(x-2);
    return min(n);
};
console.log(minEvent(7));