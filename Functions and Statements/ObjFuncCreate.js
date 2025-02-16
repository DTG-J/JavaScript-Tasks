    //factory function: 
function personFactory(n){
    return {name: n}
}

//const me = personFactory ('Dobro')
const me = {
    name: 'Sina', 
    talk() {
        return 'I am Sina'
    }
}

//Constructor function:
function Person (n) {
    //const this = {}
    this.name = n
    //return this
}

//const you = new Person ('Dobro1')
const you = {
    name: 'Dobro',
    talk() {
        return 'I am Dobro'
    }
}

personFactory (me);