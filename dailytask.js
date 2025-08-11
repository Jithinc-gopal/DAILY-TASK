let mark = [{"a":1,"b":2},{"c":3,"d":4},{"e":5},{"f":6}]
let [{a,b},...rest] = mark
console.log({a,b})
let x = [...rest]
console.log(x)


//c&d
let [{y,z},{c,d},...rest2] = mark
console.log({c,d})

