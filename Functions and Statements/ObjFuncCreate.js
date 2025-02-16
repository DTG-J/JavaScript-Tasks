//     //factory function: 
// function personFactory(n){
//     return {name: n}
// }

// //const me = personFactory ('Dobro')
// const me = {
//     name: 'Sina', 
//     talk() {
//         return 'I am Sina'
//     }
// }

// //Constructor function:
// function Person (n) {
//     //const this = {}
//     this.name = n
//     //return this
// }

// //const you = new Person ('Dobro1')
// const you = {
//     name: 'Dobro',
//     talk() {
//         return 'I am Dobro'
//     }
// }

function createPerson (name){
    return {
        name, 
        talk () {
            return `I am ${this.name}`      }
    }
}

const me = createPerson ('Dobro');
const you = createPerson ('Charlie');

me.talk ();
you.talk (); 


