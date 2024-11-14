// function setPropertiesToObj (str1, str2, str3){
//     let person = {};
//     person.firstName = str1;
//     person.lastName = str2;
//     person.hairColor = str3;
//     console.log (person);
// }
// let ObjToString = person.stringify;
// console.log  (ObjToString);

function convertToJSON(name, lastName, hairColor) {
    let person = {
    name,
    lastName,
    hairColor
    };
    console.log(JSON.stringify(person));
    }
convertToJSON ('George', 'Jones', 'Brown')