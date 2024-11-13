const jsonString = `{
"name": "George",
"age": 40,
"town": "Sofia"
}`

const jsonObject = JSON.parse (jsonString);
//console.log (jsonObject);
// for (const key in jsonObject) {
//     console.log(`${key}: ${jsonObject[key]}`)
//};
let entries = Object.entries (jsonObject)
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
 
//name: George
//age: 40
//town: Sofia