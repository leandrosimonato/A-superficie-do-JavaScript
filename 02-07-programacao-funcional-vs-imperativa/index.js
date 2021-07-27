var person = {
    age: 32,
    name: 'Leandro'
}
//função pura
function getRemainingYearsToMajorty(person) {
    return 18 - person.age
}
//função impura - gera efeitos colaterais 
function increasePersonAge(person) {
    person.age = person.age + 1
}

// Chamou um método impuro
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears)