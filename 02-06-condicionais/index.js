var me = {
    name: 'Leandro',
    age: '18'
}

function checkAge(person) {
    console.log('A idade da pessoa é: ' + person.age)

    if (person.age === 18) {
        console.log('Caio dentro do bloco')
    }

}

checkAge(me)