/*let a = 1009
let b = 100
let c = false


a >= 9.7 && typeof a === 'number' ? console.log('a >= 9.7 and is number ' + a) : console.log('a < 9.7 or is not number, but ' + a + ' (is ' + typeof a + ')')

function isThisTrue(x, y) {
    x === y ? c = true : c = false
    return c
}


console.log('That a = b is ' + isThisTrue(a, b))

const mop = [3, 2, 1, 0, -1, -2, -3]
console.log(mop[0] + ' ', mop.length)
mop[mop.length] = -4
console.log(mop[7] + ' ', mop.length)

for (let i = 0; i < mop.length; i++){
    console.log(mop[i])
}

for (let i of mop) {
    console.log(i)
}

flatPerson1 = {
    firstName: 'Rysia',
    whoIs: 'cat',
    age: 8,
hair: 'long'
}

flatPerson2 = {
    firstName: 'Chunia',
    whoIs: 'cat',
    age: 6,
hair: 'short'
}

let d = 'whoIs'
console.log('')
console.log(flatPerson1.hair + ' ' + flatPerson2.age + ' ' + flatPerson1[d])

flatPerson1.isAksakal = true
console.log(flatPerson1)

alert('Консоль будет очищен!')
console.clear()

for (i = 0; i < 100000000; i++) {
    Math.trunc(i / 10000000) === i / 10000000 ? console.log(i) : i=i ;
}

alert('Консоль будет очищен!')
console.clear()*/

(() => {
  const refs = {
    roket: document.querySelector('[data-roket]'),
  };
window.addEventListener('scroll', function() {
    var y = window.scrollY;
    y < 100 ? refs.roket.classList.add('is-hidden') : refs.roket.classList.remove('is-hidden');
});
    top.onclick = function() {
        refs.roket.classList.add('is-hidden');
  };
})();