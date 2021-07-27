var person1 = {
    name: 'Leandro',
    age: 32
}
var person2 = {
    name: 'Carol',
    age: 35
}
var person3 = {
    name: 'Antonella',
    age: 1
}
var list = [
    person1,
    person2,
    person3
]
for (var person of list) {
    console.log(person.name)
}